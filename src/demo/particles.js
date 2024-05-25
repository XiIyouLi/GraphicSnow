import * as THREE from 'three';

const TextureLoader=new THREE.TextureLoader();
const assignSRGB=(texture)=>{
    texture.colorSpace=THREE.SRGBColorSpace
};
const sprite1=TextureLoader.load('./src/assets/sprites/snowflake1.png',assignSRGB);
const sprite2=TextureLoader.load('./src/assets/sprites/snowflake2.png',assignSRGB);
const sprite3=TextureLoader.load('./src/assets/sprites/snowflake3.png',assignSRGB);
const sprite4=TextureLoader.load('./src/assets/sprites/snowflake4.png',assignSRGB);
const sprite5=TextureLoader.load('./src/assets/sprites/snowflake5.png',assignSRGB);

const geometry=new THREE.BufferGeometry();
const vertices=[];
for(let i=0;i<10000;i++){
    const x=Math.random()*2000-1000;
    const y=Math.random()*2000-1000;
    const z=Math.random()*2000-1000;
    vertices.push(x,y,z);
}
geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));

let parameters=[
    [[0.90,0.05,0.5],sprite1,10],
    [[1.0,0.2,0.5],sprite2,20],
    [[0.95,0.1,0.5],sprite3,15],
    [[0.80,0,0.5],sprite4,5],
    [[0.85,0,0.5],sprite5,8]
];
let materials=[];
for(let i=0;i<parameters.length;i++){
    const color=parameters[i][0];
    const sprite=parameters[i][1];
    const size=parameters[i][2];
    materials[i]=new THREE.PointsMaterial({
        size:size,
        map:sprite,
        blending:THREE.AdditiveBlending,
        depthTest:false,
        transparent:true
    });
    materials[i].color.setHSL(color[0],color[1],color[2],THREE.SRGBColorSpace);
    const particles=new THREE.Points(geometry,materials[i]);
    particles.rotation.x=Math.random()*6;
    particles.rotation.y=Math.random()*6;
    particles.rotation.z=Math.random()*6;
}

export default particles