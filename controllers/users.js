import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });
    console.log(user);
    res.send(`user with the name ${user.firstName} added successfully`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser  = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToBeUpdated = users.find((user) => user.id == id);

    if(firstName) userToBeUpdated.firstName = firstName;
    if(lastName) userToBeUpdated.lastName = lastName;
    if(age) userToBeUpdated.age = age;

    res.send(`User with the id ${id} hqs been updated`);
}