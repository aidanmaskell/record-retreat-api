const ObjectId = require('mongodb').ObjectId

const getAllRecords = async (collection) => {
    return await collection.find({}).toArray()
} 

const recordToAdd = (artist, title, year, img, songLink) => {
    return {
        artist: artist,
        title: title, 
        year: year,
        img: img,
        songLink: songLink,
        deleted: 0
    }
}

const addRecord = async (collection, recordToAdd) => {
    return await collection.insertOne(recordToAdd)
} 

module.exports.getAllRecords = getAllRecords
module.exports.recordToAdd = recordToAdd
module.exports.addRecord = addRecord