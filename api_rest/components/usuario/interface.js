const express = require('express')

const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado para el Usuario
 *         nombre:
 *           type: string
 *           description: El nombre del Usuario
 *         apellido:
 *           type: string
 *           description: El apellido del Usuario
 *         fecha_registro:
 *           type: Date
 *           description: La fecha de registro del Usuario
 *         fecha_actualizacion:
 *           type: Date
 *           description: La fecha de actualizacion del Usuario
 *       example:
 *         id: 6706d7feaef9ecc823a055cd
 *         nombre: Juan
 *         apellido: Pasto
 *         fecha registro: 2024-10-09T19:22:38.207Z
 *         fecha actualizacion: 2024-10-09T19:23:25.429Z
 */

/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: API RESTful que gestiona Usuarios
 */

/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtiene una Lista de Usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 6706d81faef9ecc823a055d6
 *                   nombre:
 *                     type: string
 *                     example: "Daniel"
 *                   apellido:
 *                     type: string
 *                     example: "Andrade"               
 *                   fecha_registro:
 *                     type: Date
 *                     example: "2024-10-09T19:23:11.902Z"
 *                   fecha_actualizacion:
 *                     type: Date
 *                     example: "2024-10-09T19:24:15.902Z"
 *       400:
 *         description: Bad Request
 */
routes.get('/', function(req, res) {
    controller.obtener_usuario( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Crea un Nuevo Usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Bad Request
 */
routes.post('/', function(req, res) {
    controller.insertar_usuario( req.body )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})

/**
 * @swagger
 * /usuario/{id}:
 *   put:
 *     summary: Actualiza un Usuario con el id
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: String
 *           required: true
 *           description: El id del Usuario
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Bad Request
 */
routes.put('/:id', function(req, res) {
    controller.editar_usuario( req.params.id, req.body)
    .then( (data) => response.success(req, res, data, 200) )
    .catch( (error) => response.error(req, res, error, 400) )
})

/**
 * @swagger
 * /usuario:
 *   delete:
 *     summary: Elimina un Usuario con el 'Object User' en el Body
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Bad Request
 */
routes.delete('/', function(req, res) {
    controller.eliminar_usuario( req.body )
    .then( (data) => response.success(req, res, data, 200) )
    .catch( (error) => response.error(req, res, error, 400) )
})

module.exports = routes