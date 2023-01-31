
const fs = require('fs');
const path = require('path');
const esRuta = (route) => fs.existsSync(route)
// ver si es archivo
const isFile = (route) => fs.statSync(route).isFile()
// ver si la ruta es absoluta
const isAbsolute = (route) => path.isAbsolute(route)
// si no es abosoluta ,convertir en ruta absoluta.
const resolverRuta = (route) => path.resolve(route)
// funcion que lea archivos
const readingFiles = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf8', function (error, data) {
    if (error) {
      reject('error')
    } else {
      resolve(data)
    }
  })
});
const isMdFile = (route) => path.extname(route) === '.md'

const getLinks = (documento) => {
  return new Promise((resolve, reject) => {
    const links = [];
    readingFiles(documento).then((file) => {
      const regex =  /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g;
      let match = regex.exec(file);
      while (match !== null) {
        links.push({
          href: match[2],
          text: match[1],
          file: documento,
        });
        match = regex.exec(file);
      }
      resolve(links);
      console.log(links);
    })
      .catch((error) => reject(error));
  });
}
const validateLinks = (urls) => Promise.all(urls.map((links) => fetch(links.href)
  .then((resolve) => { 
    const objetoLinks = {
      ...links,
      status:resolve.status,
      ok:resolve.ok ? 'ok':'fail'
    }
    return objetoLinks;
   
  })
)
  )
  

const route = './prueba.md';

// eslint-disable-next-line no-unused-vars
const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    if (esRuta(path)) {
      const absolutePath = isAbsolute(path) ? route : resolverRuta(route); // si es relativa convertirla
      if (isFile(absolutePath)) {
        console.log('esto es un archivo')
      }
      else {
        reject('Esto no es un archivo')
      }
      if (isMdFile(route)) {
        console.log('este archivo es .md')
      } else {
        reject('esto no es un archivo .md')
      }
      readingFiles(route)
        .then((res)=>{
          (res)
        })
       // .catch(error => { reject(error) })
      getLinks(route)
        .then((resultado) => {
       (resultado)
        });
    }
  });



};

getLinks(route)
      .then((resultado) => {
     validateLinks(resultado).then((respuesta)=>{
      console.log(respuesta)
     })
      });
  
mdLinks(route).then((respuesta) => {
 console.log (respuesta);
});

//console.log(mdLinks(route));
module.exports = {
  mdLinks,
  isFile,
  isAbsolute,
  resolverRuta,
  readingFiles,
  isMdFile,
  getLinks,
};
