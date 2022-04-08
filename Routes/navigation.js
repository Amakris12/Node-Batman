const express = require('express');
const navigation = express.Router();
const path = require('path');

navigation.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/index.html'));
})

navigation.get('/Characters', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/Characters.html'))
})

navigation.get('/Contacts', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/Contact.html'))
})

navigation.get('/Gallery', (req, res) =>{
    res.sendFile(path.join(__dirname, '../Public/Gallary.html'))
})

module.exports = navigation