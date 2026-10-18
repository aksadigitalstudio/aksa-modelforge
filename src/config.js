export const CONFIG=Object.freeze({
 appName:'AKSA ModelForge',agency:'AKSA',productName:'ModelForge',purpose:'Product design, packaging concepts, furniture prototypes, basic hard-surface modeling and 3D-print-ready concept creation',
 version:1,defaultUnit:'mm',units:{mm:{name:'Millimeters',factor:1},cm:{name:'Centimeters',factor:10},m:{name:'Meters',factor:1000},in:{name:'Inches',factor:25.4}},
 exports:['STL','OBJ','GLB','JSON'],theme:{panel:'#232728',surface:'#f5f4ef',blue:'#376ff0',viewport:'#b7bbbc'},
 storageKey:'aksa-modelforge-v1',historyLimit:40,maxObjects:160,maxVertices:900000,maxFileBytes:25000000
});
export const PRESETS={Plastic:{color:'#7093b1',roughness:.32,metalness:.05,opacity:1},'Matte plastic':{color:'#b5b7ac',roughness:.83,metalness:0,opacity:1},Metal:{color:'#a5afb5',roughness:.25,metalness:.92,opacity:1},'Glass-like':{color:'#b5d3e1',roughness:.12,metalness:0,opacity:.3},Rubber:{color:'#363c3e',roughness:.95,metalness:0,opacity:1},Clay:{color:'#c48f74',roughness:.88,metalness:0,opacity:1}};
export const PRIMITIVES={Box:{width:60,height:60,depth:60},Sphere:{radius:30,segments:32},Cylinder:{radius:25,height:60,segments:48},Cone:{radius:30,height:60,segments:48},Plane:{width:80,depth:80},Torus:{radius:30,tube:8,segments:48},Capsule:{radius:18,length:40,segments:32},'Rounded box':{width:80,height:50,depth:50,radius:5}};
