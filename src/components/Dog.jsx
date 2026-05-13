import React from 'react'
import { Canvas } from '@react-three/fiber' // the element returned from renderer in the dom is the canvas

const Dog = () => {
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