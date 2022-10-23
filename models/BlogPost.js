const { Model, Datatypes } = require('sequelize');
const sequelize = require('../Config/connection');
// may need more require??

class BlogPost extends Model {}
// model for blog post
BlogPost.init(
    {
        id: { // id for blog post
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_name: {// name of blog post
            type: Datatypes.STRING,
            allowNull: false,
        },
        blog_body: { // body of blog post
            type: Datatypes.STRING,
        },
        date_created: { // adds timestamp to blog post
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: Datatypes.NOW,
        },
        user_id: { // uses user id to store blog post
            type: Datatypes.INTEGER,
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