const ObjectId = require('mongodb').ObjectId

const getAllRecords = async (collection) => {
    return await collection.find({}).toArray()
} 

const getCurrentRecordId = (req) => {
    return {
        _id: ObjectId(req.params.id)
    }
}

const getRecordById = async (collection, id) => {
    return await collection.find(id).toArray()
}

const recordToAdd = (artist, title, year, img, songLink) => {
    return {
        artist: artist,
        title: title, 
        year: year,
        img: img,
        songLink: songLink,
        deleted: 0,
        liked: 0,
        disliked: 0
    }
}

const addRecord = async (collection, recordToAdd) => {
    return await collection.insertOne(recordToAdd)
} 

const deleteRecord = async (collection, id) => {
    return await collection.updateOne(id, {$set:{deleted: 1}})
}

module.exports.getAllRecords = getAllRecords
module.exports.getCurrentRecordId = getCurrentRecordId
module.exports.getRecordById = getRecordById
module.exports.recordToAdd = recordToAdd
module.exports.addRecord = addRecord
module.exports.deleteRecord = deleteRecord