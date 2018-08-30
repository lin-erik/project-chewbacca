const mongoose = require('mongoose')
const { MONGOOSE_URI } = require('../config.js')

const dbURI = MONGOOSE_URI || 'mongodb://localhost/projectchewbacca'

mongoose.connect(dbURI)
const db = mongoose.connection
db.on('error', () => console.error('Connection error'))
db.once('open', () => console.log('Mongoose connected'))