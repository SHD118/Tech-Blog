const { User } = require('../models');

const userdataSeed = [
    {
    username: "Hiro",
    password: "hiro123",
    email: "Hiro@gmail.com"
},
    {
    username: "jojo",
    password: "jojo123",
    email: "jojo@gmail.com"
},
    {
    username: "god",
    password: "god123",
    email: "god@gmail.com"
}
];

const userdata = () => User.bulkCreate(userdataSeed);

module.exports = userdata;