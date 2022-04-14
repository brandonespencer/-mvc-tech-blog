const { User } = require('../models');

const userData = [
    {
        username: "martina",
        twitter: "martina",
        github: "martina",
        email: "martin@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt",
        twitter: "mathewb",
        github: "mathhew",
        email: "mathew@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shaun",
        twitter: "shaun",
        github: "shaun",
        email: "shaun@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee",
        twitter: "leen",
        github: "leen",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "brandonespencer",
        twitter: "brandonespencer",
        github: "brandonespencer",
        email: "brandonespencer@yahoo.com",
        password: "p@ssword5"
    },
    {
        username: "ja",
        twitter: "ja_w",
        github: "ja",
        email: "ja@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
