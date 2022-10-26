const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connection');
// may need more require??

class BlogPost extends Model {}
// model for blog post
BlogPost.init(
    {
        id: { // id for blog post
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_name: {// name of blog post
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_body: { // body of blog post
            type: DataTypes.STRING,
        },
        date_created: { // adds timestamp to blog post
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: { // uses user id to store blog post
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost'
    }
);

module.exports = BlogPost;