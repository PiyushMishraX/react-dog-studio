import React from 'react'
// import { Canvas } from '@react-three/fiber' // the element returned from renderer in the dom is the canvas

// react three fiber hides the code and reduce need to code , it creates the scene lighing etc on its own and if wwe want to access the camera , light etc use -> useThree hook
import { Canvas, useThree } from '@react-three/fiber'
import { log } from 'three'
// useHook can only be used the canvas component 
// all hooks from react three fibre can only be inside canvas

// import { OrbitControls  } from '@react-three/drei' // orbit controls to give mouse the contoller
import { OrbitControls , useGLTF } from '@react-three/drei' // useGLTF hook to load and use the model

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
    console.log(camera.position); // is inital camera is too far awayu so model looks small , thus we set it closer

    camera.position.z = 0.55
    
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