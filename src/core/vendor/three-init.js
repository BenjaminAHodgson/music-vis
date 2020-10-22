import * as THREE from "three";
import './proctree.js';
import { ClampToEdgeWrapping, WebGLRenderer } from 'three'


export var three = {}
three.scene = new THREE.Scene();
three.camera = new THREE.PerspectiveCamera(
 75,
 window.innerWidth / window.innerHeight,
 0.1,
 1000
);
three.renderer = new WebGLRenderer();
three.geometry = new THREE.BoxGeometry();
three.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
three.light = new THREE.AmbientLight( 0x404040 ); // soft white light

three.cube = new THREE.Mesh( three.geometry, three.material );
three.cubes = [];
three.tree = new window.Tree(
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

three.trunkGeo = newTreeGeometry(three.tree);
three.trunkMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00, wireframe: false } );
three.trunkMesh = new THREE.Mesh(three.trunkGeo, three.trunkMaterial);


function newTreeGeometry (tree, isTwigs) {
    var output = new THREE.Geometry()

    this.tree[isTwigs ? 'vertsTwig' : 'verts'].forEach(function (v) {
      output.vertices.push(new THREE.Vector3(v[0], v[1], v[2]))
    })

    var uv = isTwigs ? this.tree.uvsTwig : this.tree.UV
    this.tree[isTwigs ? 'facesTwig' : 'faces'].forEach(function (f) {
      output.faces.push(new THREE.Face3(f[0], f[1], f[2]))
      output.faceVertexUvs[0].push(
        f.map(function (v) {
          return new THREE.Vector2(uv[v][0], uv[v][1])
        })
      )
    })

    output.computeFaceNormals()
    output.computeVertexNormals(true)

    return output
}