import React from 'react';
import * as THREE from 'three';
import TestMaterial from '../Material/Material';

class Scene extends React.Component {

  mount = React.createRef<HTMLDivElement>();
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  cube!: THREE.Mesh<THREE.BoxGeometry, THREE.ShaderMaterial>;
  frameID!: number;
  light!: THREE.PointLight;
  clock!: THREE.Clock;
  time: number = 0;

  componentDidMount(){
      //Add scene
      this.clock = new THREE.Clock();
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width/this.height ,
        1,
        10000
      );
      this.camera.position.z = 10;

      //Add Light
      // this.light = new THREE.PointLight(0xff0000,1,10);
      // this.light.position.set(50,50,50);
      // this.scene.add(this.light);

      //Add Renerer
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor('#ffffff');
      this.renderer.setSize(this.width , this.height );
      this.mount.current?.appendChild(this.renderer.domElement);
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      //const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
      const material = new TestMaterial({uniforms:{
        time: { value: this.time},
        resolution: { value: new THREE.Vector2()}
      }});
      this.cube = new THREE.Mesh(geometry, material);

      this.scene.add(this.cube);

      window.addEventListener('resize', this.OnWindowResize);

      this.start();
  }

  start = () => {
    if (!this.frameID) {
      this.frameID = requestAnimationFrame(this.animate);
    }
  }
  
  animate = () => {
    //rendering loop
    this.cube.rotation.x += 0.01
    this.cube.rotation.y += 0.01
    this.time += this.clock.getDelta();
    this.cube.material.uniforms.time = { value: this.time};
    //this.cube.position.add(new THREE.Vector3(0.01,0.01,0));
    this.renderScene()
    this.frameID = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  OnWindowResize = () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.camera.aspect = this.width/this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  render() {
    return (
      <div ref={this.mount}/>
    );
  }
}

export default Scene;

