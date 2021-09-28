const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description add Users
 * @method GET /add-user
 */
route.get('/add-user', services.add_user);

/**
 * @description for update user
 * @method GET /update-user
 */
route.get('/update-user', services.update_user);

//API
route.post('/users',controller.create);
route.get('/users',controller.find);
route.put('/users/:id',controller.update);
route.delete('/users/:id',controller.delete);

module.exports = route;
