const { User } = require('../models');

const userdata = [
    {
    username: "Hiro",
    password: "hiro123"
},
    {
    username: "jojo",
    password: "jojo123"
},
    {
    username: "god",
    password: "god123"
}
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;