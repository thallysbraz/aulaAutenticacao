// src/services/userService.js
const userRepository = require('../repository/userRepository');
const bcrypt = require('bcrypt');

async function registerUser(email, name, password) {
    try {
        console.log(`Senha antes de fazer a criptografia: ${password}`);
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(`Senha após fazer a criptografia: ${hashedPassword}`);
        return await userRepository.createUser(email, name, hashedPassword);
    } catch (err) {
        console.error('Error in registerUser: ', err);
        throw err;
    }
}

async function authenticateUser(email, password) {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);

    return isMatch ? user : null;
}

async function getUserById(id) {
    return userRepository.findUserById(id);
}

module.exports = {
    registerUser,
    authenticateUser,
    getUserById
};
