'use strict';
const Tags = require('../models/tags');


// Controler: Lista todas as Tags de monitoramento de serviços.
exports.findAll = function(req, res) {
    Tags.findAll(function(err, tags) {
    if (err)
        res.send(err);
        console.log('res', tags);
        res.send(tags);
    });
};


// Controler: Cria uma Tag de monitoramento de serviço. 
exports.create = function(req, res) {
const new_tags = new Tags(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor, forneça todos os campos obrigatórios.' });
        } else{
            Tags.create(new_tags, function(err, tags) {
        if (err)
            res.send(err);
            res.json({
                error:false,
                message:"Tag de monitoramento de serviço adicionada com sucesso. . . ", 
                data:tags});
        });
    }
};

// Controler: Lista uma Tag de Monitoramento de Serviço. 
exports.findById = function(req, res) {
Tags.findById(req.params.id, function(err, tags) {
    if (err)
        res.send(err);
        res.json(tags);
    });
};

// Controler: Atualiza uma Tag de Monitoramento de Serviço por ID.
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.status(400).send({ error:true, message: 'Por favor, forneça todos os campos obrigatórios.' });
    } else{
        Tags.update(req.params.id, new Tags(req.body), function(err, tags) {
        if (err)
            res.send(err);
            res.json({ error:false, 
                message: 'Tag de monitoramento de serviço atualizada com sucesso. . . ' });
        });
    }
};

// Controler: Apaga um registro de cliente por id.
exports.delete = function(req, res) {
Tags.delete( req.params.id, function(err, tags) {
    if (err)
        res.send(err);
        res.json({ error:false, 
            message: 'Tag de monitoramento de serviço Apagada com sucesso. . . ' 
        });
    });
};

// Controler: limpa todos os registros da base de dados. 
exports.limpeza = function(req, res) {
Tags.limpeza(function(err, tags){
    if (err) 
        res.send(err); 
        res.json({ erro: false, 
            message: "Todos as Tags de monitoramento de serviço foram apagadas com sucesso. . . "});  
    });
}