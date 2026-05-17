import React from 'react'
import * as THREE from "three"

// import { Canvas } from '@react-three/fiber' // the element returned from renderer in the dom is the canvas

// react three fiber hides the code and reduce need to code , it creates the scene lighing etc on its own and if wwe want to access the camera , light etc use -> useThree hook
import { Canvas, useThree } from '@react-three/fiber'
import { log } from 'three'
// useHook can only be used the canvas component 
// all hooks from react three fibre can only be inside canvas

// import { OrbitControls  } from '@react-three/drei' // orbit controls to give mouse the contoller
import { OrbitControls , useGLTF, useTexture } from '@react-three/drei' 
import { color, normalMap } from 'three/tsl'
// useGLTF hook to load and use the model
// useTextures to use normalMap and textures ( normal map are also textures )

const Dog = () => {

  // gl -<- renderer
  // useThree(({camera,scene,gl}) =>{
  //   console.log(camera.position);
    
  // })

  // return (
  //   <>
  //         <mesh>
  //           <meshBasicMaterial color={0x00FF00} />
  //           <boxGeometry args={[1,1,1,1]} />
  //         </mesh>
  //         <OrbitControls />  {/* WITH ORBIT CNTROLS WE CAN USE MOUSE TO INTERACT WITH THE MESH   , we do not will be using this in the final project but in the development it hekps with debugging etc*/}
  //   </>
  // )


  //  GIVE PATH RESPECT TO THE PUBLIC FOLDER NOT FROM THE CURRENT FILE LOCATION
  const model = useGLTF("/models/dog.drc.glb")

  // useThree hook loading camera, scene and gl renderer
  useThree(({camera, scene, gl })=>{
    // console.log(camera.position); // is inital camera is too far awayu so model looks small , thus we set it closer

    camera.position.z = 0.55
    
  })

  
  const textures = useTexture({
    normalMap: "/dog_normals.jpg" // path respect to public
  })

  // normal map get flips hidng details from some parts,
  // So stop the flipping( on Y direction )  or flip again
  textures.normalMap.flipY = false


  // traverses each object of model (108), on eby one and runs the callback each time
  // have child as parameter which accepts each object for which traverse currently runs in
  model.scene.traverse((child)=>{
    // console.log("hello");
    // console.log(child); // logs the details of the object

    // check the name of the childs and clear only those with the name DOG (beacuse this parts are of the dogs body )

    if(child.name.includes("DOG")){

      // console.log(child);
    
      // console.log(child.name.split('').reverse().join('')); // just testing the working

      // each child is a mesh on its own having there own geometry and material , we apply normalMa ogn material

      // child.material = new THREE.MeshStandardMaterial({
      //   normalMap: textures.normalMap
      // })

      // child.material = new THREE.MeshBasicMaterial({ // using basic material bcz it do not require external lighting , but basic material is hiding are details ( much brighter than needed) so using matcap material
      child.material = new THREE.MeshMatcapMaterial({
        normalMap: textures.normalMap,
        color: 0xFF0000
      })

      
      
    }
  })



  return (
    <>
      {/* <primitive object={model.scene} position = {[0,0,0]} scale={[10, 10, 10]} /> scale property to scale up x,y,z, axises respectively  */}
      {/* scene is loaded contianing the model */}

      <primitive object={model.scene} position = {[0.25,-0.55,0]} rotation={[0, Math.PI/3.9, 0]} /> 
      {/* rotation to rotate model to front a little, the rotation property is given in radian(pie  180 deg)  --- Use hit and trial to set best ratation*/}

      <directionalLight position={[ 0, 5, 5]} color={0xFFFFFF} intersity={10}/> {/* meshStandard material require light to be seen */}

      <OrbitControls />
    </>
  )
}

export default Dog