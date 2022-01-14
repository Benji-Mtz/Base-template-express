const path = require('path');
const root = path.join(__dirname, '../public')

const users = [
    { id: 1, nombre: 'Benji', edad: 35 },
    { id: 2, nombre: 'Paco', edad: 36 },
    { id: 3, nombre: 'Pablo', edad: 37 },
];

const getUsers = (req, res) => {
    // res.sendFile('users.html', { root: root })
    res.render('users', { users: users })
}

const getCreateUser = (req, res) => {
    // res.sendFile('create-user.html', { root: root })
    res.render('create-user')
}

const getUpdateUSer = (req, res) => {
    // res.sendFile('update-user.html', { root: root })
    res.render('update-user')
}

const getDeleteUser = (req, res) => {
    // res.sendFile('delete-user.html', { root: root })
    res.render('delete-user')
}

const createUser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.render('users', { users: users })
}

const updateUser = (req, res) => {
    const param =  req.params.id

    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
        users[i].nombre = req.body.nombre;
        users[i].edad = req.body.edad;
        break
        } 
    }
    res.render('users', { users: users })
}

const deleteUser = (req, res) => {
    const param =  req.params.id

    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
        users.splice(i, 1)
        break
        } 
    }
    res.render('users', { users: users })
}

module.exports = {
    getUsers,
    getCreateUser,
    getUpdateUSer,
    getDeleteUser,
    createUser,
    updateUser,
    deleteUser,
}