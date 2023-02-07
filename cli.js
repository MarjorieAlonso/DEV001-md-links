

const { mdLinks } = require('./index.js');
const ruta = process.argv[2]
 let isValidate = false;
if (process.argv[3] == '--validate') {
    isValidate = true;
}

console.log(ruta) 
mdLinks(ruta, isValidate).then((result) => {
    console.log(result)
})
    .catch((error) => {
        console.log(error)
    });



