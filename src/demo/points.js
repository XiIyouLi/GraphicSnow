import * as THREE from "three";

function getTexture(){
    var texture=new THREE.TextureLoader().load('./src/assets/people02.png');
    return texture;
}

const vertices=new Float32Array([
    -10,-10,10,//v0
    10,-10,10,//v1
    10,10,10,//v2
    -10,10,10,//v3
]);

const sphere=new THREE.SphereGeometry(50)
const cube=new THREE.BoxGeometry(100,100,100,10,10,10)

const geometry=new THREE.BufferGeometry()
//geometry.setAttribute("position",new THREE.BufferAttribute(vertices,3))
geometry.setAttribute("position",cube.getAttribute('position'))

const material=new THREE.PointsMaterial({
    color:0x00ffff,
    //map:getTexture(),
    size:1,
    transparent:true,
    blending:THREE.NormalBlending,
    opacity:0.5
})

const points=new THREE.Points(geometry,material)

export default points