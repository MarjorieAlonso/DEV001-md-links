  const { mdLinks }= require('./index.js'); 

 const ruta = process.argv[2];
console.log(ruta)
 mdLinks(ruta).then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
}); 

