
// Setup Global Elements Here
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


/* Reusable functions */ 
function getCube() {
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);
  return cube;
}


/* Main Application handlers */ 
// Loop function which gets called to load a new frame.
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

// The first function which is called, automatically on load.
(function() {
  if (WEBGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
    scene.add(getCube());
    camera.position.z = 5;

  } else {
    var warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
  }
});
