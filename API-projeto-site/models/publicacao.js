'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Publicacao = sequelize.define('Publicacao',{	
		id: {
			field: 'idPostagem',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
            field: 'nomeTenis',
            type: DataTypes.STRING,
            allowNull: false
        },
		marca: {
            field: 'marcaTenis',
            type: DataTypes.STRING,
            allowNull: false
        },
		lancamento: {
            field: 'dataLancamento',
            type: DataTypes.DATE,
            allowNull: false
        },
		drop: {
            field: 'numDrop',
            type: DataTypes.STRING,
            allowNull: false
        },
		numero: {
            field: 'numDrop',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data: {
            field: 'dataPostagem',
            type: DataTypes.DATE,
            allowNull: false
        },
        fkModerador: {
            field: 'fkModerador',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'tb_Postagem', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicacao;
};
