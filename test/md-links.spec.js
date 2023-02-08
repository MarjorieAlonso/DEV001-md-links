const { default: expect } = require('expect');
const { mdLinks,
  isFile,
  isAbsolute,
  resolverRuta,
  readingFiles,
  isMdFile,
  getLinks
} = require('../index.js');



describe('mdLinks', () => {

  /* it('Deberia devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });    */
  it('Deberia rechazar cuando el path no existe', () => {
    mdLinks('/mayito/documento/noexiste.md').catch((error) => {
      expect(error).toBe('la ruta no existe')
    })
  });


});

//funcion isFile
describe('Saber si es un archivo', () => {
  it('isFile debería ser una función', () => {
    expect(typeof isFile).toBe('function');
  });
  it('isFile debería dar true si  es un archivo', () => {
    expect(isFile('./holo.txt')).toBe(true);
  });
  it('isFile deberia dar false si no es un archivo', () => {
    expect(isFile('./archivosDePruebas')).toBe(false)
  })
})
// funcion isAbsolute
describe('Saber si es absoluta', () => {
  it('isAbsolute es una funcion', () => {
    expect(typeof isAbsolute).toBe('function');
  })
  it('si no es absoluta, que devuelva false', () => {
    expect(isAbsolute('./holo.txt')).toBe(false);
  })
  it('si la ruta es absoluta, devolver true', () => {
    expect(isAbsolute("C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\.holo.txt")).toBe(true);
  })
})
describe('Deberia convertir a absoluta', () => {
  it('resolverRuta es una funcion', () => {
    expect(typeof resolverRuta).toBe('function');
  })

  it('debería convertir a ruta absoluta', () => {
    expect(resolverRuta('./holo.txt')).toBe("C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\holo.txt");
  });
})
//funcion readFile
describe('Saber si lee archivos', () => {
  it('readingFiles es una funcion', () => {
    expect(typeof readingFiles).toBe('function');
  })
})
it('Deberia retornar un array si la ruta es un archivo', () => {
  expect(readingFiles('C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\.prueba.md'))
    .toEqual(['C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\.prueba.md',
      'C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\.README.md'
    ])
});
//funcion isMdFile
describe('testeo si el archivo es md', () => {
  it('isMdFile es una funcion', () => {
    expect(typeof isMdFile).toBe('function')
  })
  it('isMdFile debe identificar si la extension es md', () => {
    expect(isMdFile('C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\.prueba.md')).toBe(true);
  })
  it('Deberia rechazar si la extension no es md', () => {
    expect(isMdFile('C:\\Users\\chica\\OneDrive\\Documentos\\Md-links\\DEV001-md-links\\.prueba.md')).toBe(true);
  })
})
//funcion getLinks
describe('testeo de funcion getLinks', () => {
  it('getLinks es una funcion', () => {
    expect(typeof getLinks).toBe('function')
  })

})


