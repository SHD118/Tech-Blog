const router = require("express").Router();
const { User } = require('../../models');

// login in

router.post('/login', async (req, res) => {
    try {
        const userNameData = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (!userNameData){
            res.status(404).json({ message: 'No user found with this email!' });
            return;
          }
            
    } catch {
        
    }
})

// logout

// create user

// delete user?