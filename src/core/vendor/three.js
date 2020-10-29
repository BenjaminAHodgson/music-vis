import * as $ from 'jquery'
import * as THREE from 'three'
import './proctree.js'
import { three } from './three-init.js'
import { ClampToEdgeWrapping, WebGLRenderer } from 'three'

export class ThreeRuntime {
  camera;
  renderer;
  scene;
  light;
  trunkGeo;
  trunkMesh;
  tree;

  constructor (threeJSON) {
   Object.assign(this, threeJSON);

   this.moveIn = this.moveIn.bind(this);
   this.rotate = this.rotate.bind(this);
   this.lightsMove = this.lightsMove.bind(this)
  }

  InitThree () {
    this.camera.position.set(0, 0, 10)
    this.trunkMesh.castShadow = true
    this.trunkMesh.scale.multiplyScalar(8)
    this.trunkMesh.position.set(0, -50, -30)
    this.light.castShadow = true

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.domElement.setAttribute('class', '')
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    $('.Content').append(this.renderer.domElement)

    this.scene.background = new THREE.Color('darkblue')

    this.lightsON();
    this.lightsMove();
    this.renderTree(this.tree)
    this.moveIn()
  }

  lightsON(){
    const sphere = new THREE.SphereBufferGeometry(0.5, 16, 8)
    this.light.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: 0xff0040 })));
    this.scene.add(this.light);

  }

  lightsMove(){
    requestAnimationFrame(this.lightsMove)
    const time = Date.now() * 0.0005
    const delta = this.clock.getDelta()

    this.light.position.x = Math.sin(time * 0.7) * 2
    this.light.position.y = Math.cos(time * 0.5) * 2
    this.light.position.z = Math.cos(time * 0.3) * 2

    this.renderer.render(this.scene, this.camera)
  }

  renderTree () {
    this.scene.add(this.trunkMesh) // Use your own scene
  }


  generateCube () {
    return new THREE.Mesh(this.geometry, this.material)
  }


  rotate () {
    requestAnimationFrame(this.rotate)
    this.trunkGeo.rotateY(0.01)
    this.renderer.render(this.scene, this.camera)
  }

  moveIn () {
    var handle = requestAnimationFrame(this.moveIn)
    this.camera.translateY(-0.01)
    this.renderer.render(this.scene, this.camera)
    if (this.camera.position.y < -50) {
      cancelAnimationFrame(handle)
      this.rotate()
    }
  }
}
