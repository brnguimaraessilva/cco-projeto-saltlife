'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Moderador = sequelize.define('Moderador',{
		id: {
			field: 'idModerador',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		login: {
			field: 'emailMod',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaMod',
			type: DataTypes.STRING,
			allowNull: false
		},
		nome: {
			field: 'nomeMod',
			type: DataTypes.STRING,
			allowNull: false
		},
		data: {
			field: 'dataNascMod',
			type: DataTypes.DATE,
			allowNull: false
		},
    }, 
	{
		tableName: 'tb_Moderador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Moderador;
};
