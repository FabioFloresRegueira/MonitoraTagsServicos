const express = require('express')
const router = express.Router()
const tagsController =   require('../controllers/tags.controller');

// lista todos os clientes 
//http://localhost:3001/monitorar/api/tags
router.get('/', tagsController.findAll);

// cria um registro de cliente
//http://localhost:3001/monitorar/api/tags
router.post('/', tagsController.create);

// busca um cliete por id
//http://localhost:3001/monitorar/api/tags/iDCliente
router.get('/:id', tagsController.findById);

// atualiza um cliente por id
//http://localhost:3001/monitorar/api/tags/iDCliente
router.put('/:id', tagsController.update);

// Deleta um cliente por id
//http://localhost:3001/monitorar/api/tagsiDCliente
router.delete('/:id', tagsController.delete);

// Deleta todos os registros da tabela de cliente
//http://localhost:3001/monitorar/api/tags
router.delete('/', tagsController.limpeza); 


module.exports = router