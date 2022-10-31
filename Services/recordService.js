const ObjectId = require('mongodb').ObjectId

const getAllRecords = async (collection) => {
    return await collection.find({}).toArray()
} 

module.exports.getAllRecords = getAllRecords