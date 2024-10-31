const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API RESTful - Usuarios',
            version: '1.0.0',
            dexription: 'Documentacion de la API monolitica que gestiona usuarios.',
            contact: {
                name: 'Giovanny Jacome',
                email: 'gjacomec@est.ups.edu.ec'
            },
        },
        servers: [
            { url: 'http://localhost:3000', description: 'App Server' }
        ],
    },
    apis: ['./components/**/*.js', './network/*.js'], // Paths con los archivos con comentarios Swagger
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;