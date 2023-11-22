const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  //'lqwo6bf4oYOXZlzcGQ0Vt8XBVS7828oT', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
