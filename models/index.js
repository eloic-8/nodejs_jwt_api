const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')

const db = {};
let sequelize;

// if (config.use_env_variable) {
// 	sequelize = new Sequelize(process.env[config.use_env_variable])
// } else {
// 	const dbconfig = config.db
// 	sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, dbconfig)
// }
sequelize = new Sequelize(config.db.instance, config.db.username, config.db.password, {
    Sequelize: sequelize,
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel: 10000
    }
});

fs
	.readdirSync(__dirname)
	.filter((file) => {
		return (file.indexOf('.') !== 0) &&
           (file !== basename) &&
           (file.slice(-3) === '.js')
	})
	.forEach((file) => {
		const model = sequelize.import(path.join(__dirname, file))
		db[model.name] = model
	})

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require('./user.model')(sequelize, Sequelize);

module.exports = db;
