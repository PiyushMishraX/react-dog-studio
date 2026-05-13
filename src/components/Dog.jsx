import React from 'react'
// import { Canvas } from '@react-three/fiber' // the element returned from renderer in the dom is the canvas

// react three fiber hides the code and reduce need to code , it creates the scene lighing etc on its own and if wwe want to access the camera , light etc use -> useThree hook
import { Canvas, useThree } from '@react-three/fiber'
import { log } from 'three'
// useHook can only be used the canvas component 

const Dog = () => {

  // gl -<- renderer
  useThree(({camera,sceme,gl}) =>{
    console.log(camera.position);
    
  })

  return (
        <Canvas>
          <mesh>
            <meshBasicMaterial color={0x00FF00} />
            <boxGeometry args={[1,1,1,1]} />
          </mesh>
            
        </Canvas>
  )
}

export default Dog