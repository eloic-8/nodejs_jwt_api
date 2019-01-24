module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement:true
        },
        username: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    });

    return User;
}