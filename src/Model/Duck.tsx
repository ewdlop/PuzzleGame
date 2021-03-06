/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    LOD3spShape: THREE.Mesh
  }
  materials: {
    ['blinn3-fx']: THREE.MeshStandardMaterial
  }
}

export default function DuckModel(props: JSX.IntrinsicElements['group']) {

  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/glTF/Duck.gltf') as GLTFResult

  useFrame(() => {

    if (group && group.current) {
      group.current.children[0].children.forEach((child) => {
        child.rotation.y += 0.01;
      })
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.01, 0.01, 0.01]}>
        <PerspectiveCamera
          makeDefault={false}
          far={10000}
          near={1}
          fov={37.85}
          position={[400.11, 463.26, -431.08]}
          rotation={[-2.31, 0.57, 2.61]}
          scale={[1, 1, 1]}
        />
        <mesh geometry={nodes.LOD3spShape.geometry} material={materials['blinn3-fx']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glTF/Duck.gltf')
