import React, { useRef, useState } from 'react';
import {useFrame, useThree } from '@react-three/fiber';
import { MyMaterialImpl } from '../Material/TestMaterial';
import '../Material/TestMaterial';

// const vertex = `
// uniform float time;
// varying vec2 vUv;

// void main() {
//     vUv = uv;
//     //vec3 newPosition = position + normal * vec3(sin(time * 0.2) * 3.0);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }`
// const fragment = `
// uniform float time;
// varying vec2 vUv;

// void main() {
//   vec2 position = -1.0 + 2.0 * vUv;

//   float red = abs(sin(position.x * position.y + time / 5.0));
//   float green = abs(sin(position.x * position.y + time / 4.0));
//   float blue = abs(sin(position.x * position.y + time / 3.0 ));
//   gl_FragColor = vec4(red, green, blue, 1.0);
// }`


interface Props {
    position: number[]
}

const Box: React.FC<Props> = ({ position }) => {

    // const uniforms = useMemo(() => ({
    //     time: { value: 0}
    // }), [])

    // const uniforms = {
    //     time: { value: 0}
    // };

    const mesh = useRef<THREE.Mesh>(null);
    //const materialRef = useRef<ShaderMaterialProps>(null);
    const materialRef = useRef<MyMaterialImpl>(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const { clock } = useThree();

    useFrame(
        () => {
            
            if (mesh && mesh.current) {
                mesh.current.rotation.x += 0.01;
                mesh.current.rotation.y += 0.01;
            }
            if(materialRef && materialRef.current && materialRef.current){
                materialRef.current.time += clock.getDelta();
            }
        }
    );

    return (
        <mesh
            {...position}
            ref={mesh}
            scale={active ? [2, 2, 2] : [1, 1, 1]}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            {/* <shaderMaterial ref={materialRef} attach="material" args={[{
                uniforms: uniforms,
                vertexShader: vertex,
                fragmentShader: fragment
            }]}/> */}
            {/* <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} /> */}
            <myMaterial ref={materialRef} time={1} attach="material"/>
        </mesh>
    )
}

export default Box;