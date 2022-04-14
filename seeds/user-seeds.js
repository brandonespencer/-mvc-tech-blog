const { User } = require('../models');

const userData = [
    {
        username: "martyb",
        twitter: "martinswilldoit",
        github: "martin.blandon",
        email: "martin@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "mat",
        twitter: "mathews",
        github: "mathhews",
        email: "mathew.s@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shawn",
        twitter: "shawn",
        github: "shawn",
        email: "shawn@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lena",
        twitter: "lena",
        github: "lena",
        email: "le_na@gmail.com",
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
        twitter: "ja_r",
        github: "ja.rile",
        email: "ja.rile@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
