const { Post } = require('../models');

const postData = [
    {
        creator_id: "1",
        post_title: "linux kernel name origins",
        post_content: "named because—like a seed inside a hard shell—it exists within the OS and controls all the major functions of the hardware, whether it’s a phone, laptop, server, or any other kind of computer."
},
    {
        creator_id: "2",
        post_title: "What is a Turing Machine?",
        post_content: "A Turing machine is an abstract computational model that performs computations by reading and writing to an infinite tape. Turing machines provide a powerful computational model for solving problems in computer science and testing the limits of computation — are there problems that we simply cannot solve?"
},
    {
        creator_id: "3",
        post_title: "OS - What is a deadlock?",
        post_content: "A deadlock is a situation in which two computer programs sharing the same resource are effectively preventing each other from accessing the resource, resulting in both programs ceasing to function. ... Eventually some operating systems offered dynamic allocation of resources."
}
];

const postData = () => Post.bulkCreate(postData);

module.exports = postData;