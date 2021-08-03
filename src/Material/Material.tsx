import { ShaderMaterial, IUniform } from "three"

export interface MaterialOption {
  uniforms: {
    [uniform: string]: IUniform
  }
}

class TestMaterial extends ShaderMaterial {
  constructor(options: MaterialOption) {
    super({
      uniforms: options.uniforms,
      vertexShader: `
        uniform float time;
        varying vec2 vUv;
      
        void main() {
            vUv = uv;
            //vec3 newPosition = position + normal * vec3(sin(time * 0.2) * 3.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;

        void main() {
          vec2 position = -1.0 + 2.0 * vUv;

          float red = abs(sin(position.x * position.y + time / 5.0));
          float green = abs(sin(position.x * position.y + time / 4.0));
          float blue = abs(sin(position.x * position.y + time / 3.0 ));
          gl_FragColor = vec4(red, green, blue, 1.0);
        }`
    })
  }
}

export default TestMaterial;