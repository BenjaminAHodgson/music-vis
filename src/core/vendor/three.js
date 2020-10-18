import * as $ from "jquery";
import * as THREE from "three";
import { WebGLRenderer } from "three";


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
 75,
 window.innerWidth / window.innerHeight,
 0.1,
 1000
);
var renderer = new WebGLRenderer();
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );


export function InitThree() {

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.setAttribute("class", "three");

   $('.Content').append(renderer.domElement);

   spawn();
   render();
}


function spawn(){
    scene.add( cube );
    camera.position.z = 5;
}

function render(){
    requestAnimationFrame( render );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}