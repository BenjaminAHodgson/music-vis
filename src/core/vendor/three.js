import * as $ from "jquery";
import * as THREE from "three";
import './proctree.js';
import { ClampToEdgeWrapping, WebGLRenderer } from "three";


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
var cubes = [];
var tree = new window.Tree(
    {
		"seed": 262,
		"segments": 6,
		"levels": 5,
		"vMultiplier": 2.36,
		"twigScale": 0.39,
		"initalBranchLength": 0.49,
		"lengthFalloffFactor": 0.85,
		"lengthFalloffPower": 0.99,
		"clumpMax": 0.454,
		"clumpMin": 0.404,
		"branchFactor": 2.45,
		"dropAmount": -0.1,
		"growAmount": 0.235,
		"sweepAmount": 0.01,
		"maxRadius": 0.139,
		"climbRate": 0.371,
		"trunkKink": 0.093,
		"treeSteps": 5,
		"taperRate": 0.947,
		"radiusFalloffRate": 0.73,
		"twistRate": 3.02,
		"trunkLength": 2.4
	}

)





export function InitThree() {

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.setAttribute("class", "three");

   $('.Content').append(renderer.domElement);
  
  scene.background = new THREE.Color('skyblue');
  renderTree(tree);
  render();
}

function renderTree(){
    camera.position.z = 5;
    var trunkGeo = newTreeGeometry(tree);
    var trunkMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00, wireframe: false } );
    var trunkMesh = new THREE.Mesh(trunkGeo, trunkMaterial);
    trunkMesh.position.setY(-3);
    scene.add(trunkMesh); // Use your own scene
}

function newTreeGeometry(tree, isTwigs) {
    var output = new THREE.Geometry();
  
    tree[ isTwigs ? 'vertsTwig' : 'verts'].forEach(function(v) {
      output.vertices.push(new THREE.Vector3(v[0], v[1], v[2]));
    });
  
    var uv = isTwigs ? tree.uvsTwig : tree.UV;
    tree[ isTwigs ? 'facesTwig' : 'faces'].forEach(function(f) {
      output.faces.push(new THREE.Face3(f[0], f[1], f[2]));
      output.faceVertexUvs[0].push(f.map(function(v) {
        return new THREE.Vector2(uv[v][0], uv[v][1]);
      }));
    });
  
    output.computeFaceNormals();
    output.computeVertexNormals(true);
  
    return output;
  }


function generateCube(){
   return new THREE.Mesh( geometry, material );
}


function spawn(){

    for(var i = 0; i < 100; i++){
        var cube = generateCube();
        cube.position.x = i - 50;
        cubes.push(cube);
    }
    cubes.forEach(function(cube){
        scene.add(cube);
    })
    

}

function render(){
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}