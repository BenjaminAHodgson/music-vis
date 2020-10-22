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
  }

  InitThree () {
    this.camera.position.set(0, 5, 5)
    this.trunkGeo.castShadow = true
    this.trunkMesh.position.setY(-3)
    this.light.position.set(4, -1, 0)
    this.light.castShadow = true

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.domElement.setAttribute('class', '')
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap

    $('.Content').append(this.renderer.domElement)

    this.scene.background = new THREE.Color('skyblue')
    this.scene.add(this.light)

    this.renderTree(this.tree)
    this.moveIn()
  }

  renderTree () {
    this.scene.add(this.trunkMesh) // Use your own scene
  }


  generateCube () {
    return new THREE.Mesh(this.geometry, this.material)
  }


  render () {
    requestAnimationFrame(this.render)
    this.trunkGeo.rotateY(0.01)
    this.renderer.render(this.scene, this.camera)
  }

  moveIn () {
    var handle = requestAnimationFrame(this.moveIn)
    this.camera.translateY(-0.01)
    this.renderer.render(this.scene, this.camera)
    if (this.camera.position.y < 1) {
      cancelAnimationFrame(handle)
      this.render()
    }
  }
}
