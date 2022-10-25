const sequelize = require('../Config/connection');
// const models require
const { User, BlogPost } = require('../models');
// json files in the seeds folder that takes and store the users blog post
const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedTechDB = async () => {
    await sequelize.sync({ force: true });
    // initalizing the hooks with sequelize
    const userD = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for ( const blog of BlogData) {
        await BlogPost.create({
            ...blog,
            user_id: userD[Math.floor(Math.random () * userD.length)].id,
        });
    }
    process.exit(0);
};

seedTechDB();