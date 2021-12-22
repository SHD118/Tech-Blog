const { User } = require('../models');

const userdataSeed = [
    {
    username: "Hiro",
    password: "hiro12334",
    email: "Hiro@gmail.com"
},
    {
    username: "jojo",
    password: "jojo12343",
    email: "jojo@gmail.com"
},
    {
    username: "god",
    password: "god12343",
    email: "god@gmail.com"
}
];

const userdata = () => User.bulkCreate(userdataSeed);

module.exports = userdata;