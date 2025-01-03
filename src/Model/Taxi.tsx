/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube_3: THREE.Mesh;
    Cube_4: THREE.Mesh;
    Cube_5: THREE.Mesh;
    Cube_6: THREE.Mesh;
    Cube_7: THREE.Mesh;
    Cube_8: THREE.Mesh;
    Cube_9: THREE.Mesh;
    Cube_10: THREE.Mesh;
    Cube_11: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cylinder_3: THREE.Mesh;
    Wiper: THREE.Mesh;
    Wiper001: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder010_2: THREE.Mesh;
    Cylinder010_3: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Cylinder011_2: THREE.Mesh;
    Cylinder011_3: THREE.Mesh;
    Cylinder012: THREE.Mesh;
    Cylinder012_1: THREE.Mesh;
    Cylinder012_2: THREE.Mesh;
    Cylinder012_3: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
  };
  materials: {
    Taxi: THREE.MeshStandardMaterial;
    WindowTrim: THREE.MeshStandardMaterial;
    Window: THREE.MeshStandardMaterial;
    Headlight: THREE.MeshStandardMaterial;
    Trim: THREE.MeshStandardMaterial;
    TurnSignal: THREE.MeshStandardMaterial;
    Brights: THREE.MeshStandardMaterial;
    SideMirror: THREE.MeshStandardMaterial;
    Mirror: THREE.MeshStandardMaterial;
    TailLight: THREE.MeshStandardMaterial;
    Grill: THREE.MeshStandardMaterial;
    Bumper: THREE.MeshStandardMaterial;
    Tire: THREE.MeshStandardMaterial;
    Hubcap: THREE.MeshStandardMaterial;
    Hubcap2: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    Wipers: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    TaxiSign: THREE.MeshStandardMaterial;
    TaxiLogo: THREE.MeshStandardMaterial;
    TaxiSign2: THREE.MeshStandardMaterial;
    LicensePlate: THREE.MeshStandardMaterial;
    LicensePlate2: THREE.MeshStandardMaterial;
  };
};

export default function TaxiModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Taxi.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Taxi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.WindowTrim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.Window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.Headlight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4.geometry}
          material={materials.Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5.geometry}
          material={materials.TurnSignal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          material={materials.Brights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7.geometry}
          material={materials.SideMirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8.geometry}
          material={materials.Mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9.geometry}
          material={materials.TailLight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10.geometry}
          material={materials.Grill}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11.geometry}
          material={materials.Bumper}
        />
      </group>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Hubcap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Hubcap2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wiper.geometry}
        material={materials.Wipers}
        position={[0, 0.27, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wiper001.geometry}
        material={materials.Wipers}
        position={[0, 0.27, 0]}
      />
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_1.geometry}
          material={materials.Hubcap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_2.geometry}
          material={materials.Hubcap2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_1.geometry}
          material={materials.Hubcap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_2.geometry}
          material={materials.Hubcap2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012.geometry}
          material={materials.Tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_1.geometry}
          material={materials.Hubcap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_2.geometry}
          material={materials.Hubcap2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.TaxiSign}
        />
      </group>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.TaxiLogo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials.TaxiSign2}
        />
      </group>
      <group position={[0, 0.27, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.LicensePlate}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.LicensePlate2}
        />
      </group>
    </group>
  );
}

useGLTF.preload("gltF/Taxi.gltf");
