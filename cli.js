

const { mdLinks,
    totalStats,
    statBroken,
    statUnico } = require('./index.js');

const ruta = process.argv[2]
let isValidate = false;
if (process.argv[3] == '--validate') {
    isValidate = true;
}


console.log(ruta)
mdLinks(ruta, { validate: isValidate }).then((result) => {
    if (process.argv[4] == '--stats' && process.argv[3] == '--validate') {
        console.log(`Total: ${totalStats(result)}
    Unique: ${statUnico(result)}
    Broken: ${statBroken(result)}`)
    } else if (process.argv[4] == '--stats') {
        console.log(`Total: ${totalStats(result)}
    Unique: ${statUnico(result)}`)
    }
})
    .catch((error) => {
        console.log(error)
    });



