import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"

const MyMaterial = shaderMaterial(
    { time: 0},
    `uniform float time;
    varying vec2 vUv;
  
    void main() {
        vUv = uv;
        //vec3 newPosition = position + normal * vec3(sin(time * 0.2) * 3.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
    `uniform float time;
    varying vec2 vUv;

    void main() {
      vec2 position = -1.0 + 2.0 * vUv;

      float red = abs(sin(position.x * position.y + 1000.0*time / 5.0));
      float green = abs(sin(position.x * position.y + 1000.0*time / 4.0));
      float blue = abs(sin(position.x * position.y + 1000.0*time / 3.0 ));
      gl_FragColor = vec4(red, green, blue, 1.0);
    }`
)

extend({MyMaterial})

export type MyMaterialImpl = {
  time: number
} & JSX.IntrinsicElements['shaderMaterial']

declare global {
  namespace JSX {
    interface IntrinsicElements {
      myMaterial: MyMaterialImpl
    }
  }
}