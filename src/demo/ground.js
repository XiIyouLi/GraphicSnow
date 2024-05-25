import * as THREE from "three";
const geometry=new THREE.PlaneGeometry(1000,1000);
const material=new THREE.MeshPhongMaterial({
    color:0xffffff,
});

const mesh=new THREE.Mesh(geometry,material);
mesh.rotateX(-Math.PI/2);
mesh.position.set(0,-5,0);

mesh.receiveShadow=true;

export default mesh