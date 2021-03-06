/**
Marton Bagoly
 */

const express = require('express')
const api = express.Router()
const Model = require('../models/customers.js')
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const notfoundstring = 'customers'

api.get('/', (req, res) => {
	res.render('customers/index.ejs');
})

api.get('/create', (req, res) => {

	res.render('customers/create.ejs');
})

api.get('/delete/:id', (req, res) => {

	res.render('customers/delete.ejs');
})

api.get('/edit/:id', (req, res) => {

	res.render('customers/edit.ejs');
})

api.get('/details/:id', (req, res) => {

	res.render('customers/details.ejs');
})

api.get('/partial_edit/:id', (req, res) => {

	res.render('customers/partial_edit.ejs');
})

module.exports = api