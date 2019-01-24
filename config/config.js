module.exports =  {
    port: 5000,
    db: {
        username: 'db_username',
        password: 'db_password',
        instance: 'db_instance',
        host: 'db_host' ,
        dialect: 'mysql', // or 'mssql' or 'postgre' or 'sqlite'
        define: {
            timestamp: true
        }
    },
    jwt: {
        secret: 'mysecretkey', // can be whatever
        expiresIn: '2h' // token expires in 2 hours
    }
}