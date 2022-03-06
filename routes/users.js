import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();
let users = [
    // {
    //     firstName: "vandy",
    //     lastName: "vandy",
    //     age: 23 
    // },
    // {
    //     firstName: "donia",
    //     lastName: "donia",
    //     age: 20
    // }
];

// all routes in here are starting with /users 
// if we add something after a slash, the redirect will be /users/users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    console.log(user);
    res.send(`user with the name ${user.firstName} added successfully`);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser  = users.find((user) => user.id == id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database.`);
})

export default router;