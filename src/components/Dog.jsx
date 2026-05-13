import React from 'react'
// import { Canvas } from '@react-three/fiber' // the element returned from renderer in the dom is the canvas

// react three fiber hides the code and reduce need to code , it creates the scene lighing etc on its own and if wwe want to access the camera , light etc use -> useThree hook
import { Canvas, useThree } from '@react-three/fiber'
import { log } from 'three'
// useHook can only be used the canvas component 

import { OrbitControls  } from '@react-three/drei'

const Dog = () => {

  // gl -<- renderer
  useThree(({camera,sceme,gl}) =>{
    console.log(camera.position);
    
  })

  return (
    <>
          <mesh>
            <meshBasicMaterial color={0x00FF00} />
            <boxGeometry args={[1,1,1,1]} />
          </mesh>
          <OrbitControls />  {/* WITH ORBIT CNTROLS WE CAN USE MOUSE TO INTERACT WITH THE MESH  */}
    </>
  )
}

export default Dog