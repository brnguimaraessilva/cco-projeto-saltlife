var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Publicacao = require('../models').Publicacao;

/* ROTA QUE RECUPERA CRIA UMA PUBLICAÇÃO */
router.post('/publicar/:idModerador', function(req, res, next) {
    console.log("Iniciando Publicação...")
    
	let idModerador = req.params.idModerador;

    Publicacao.create({
        nome: req.body.nome,
        marca: req.body.marca,
        lancamento: req.body.lancamento,
        drop: req.body.drop,
        numero: req.body.numero,
        data: req.body.data,
        fkModerador: idModerador
    }).then(resultado => {
        console.log("Post realizado com sucesso!!");
        res.send(resultado);
    }).catch(erro => {
        console.log('DEU UM ERRINHO')
        console.error(erro);
        res.status(500).send(erro.message);
    })
})

/* ROTA QUE RECUPERA TODAS AS PUBLICAÇÕES */
router.get('/', function(req, res, next) {
	console.log('Recuperando todas as publicações');
	
    let instrucaoSql = `SELECT 
    usuario.nome,
    descricao
    FROM publicacao
    INNER JOIN usuario
    ON Publicacao.fkUsuario = Usuario.id
    ORDER BY publicacao.id DESC`;

	sequelize.query(instrucaoSql, {
		model: Publicacao,
		mapToModel: true 
	})
	.then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		res.json(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});


/* ROTA QUE RECUPERA AS PUBLICAÇÕES DE UM USUÁRIO PELO ID */
// router.get('/:idModerador', function(req, res, next) {
// 	console.log('Recuperando todas as publicações');
	
// 	var idModerador = req.params.idModerador;

//     let instrucaoSql = `SELECT 
//     usuario.nome,
//     descricao
//     FROM publicacao
//     INNER JOIN usuario 
//     ON Publicacao.fkUsuario = Usuario.id
//     WHERE fkUsuario = ${idModerador}
//     ORDER BY publicacao.id DESC`;

// 	sequelize.query(instrucaoSql, {
// 		model: Publicacao,
// 		mapToModel: true 
// 	})
// 	.then(resultado => {
// 		console.log(`Encontrados: ${resultado.length}`);
// 		res.json(resultado);
// 	}).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
// 	});
// });

module.exports = router;
