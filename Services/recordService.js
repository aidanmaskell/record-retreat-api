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
        deleted: false,
        liked: false,
        disliked: false
    }
}

const addRecord = async (collection, recordToAdd) => {
    return await collection.insertOne(recordToAdd)
} 

const deleteRecord = async (collection, id) => {
    return await collection.updateOne(id, {$set:{deleted: true}})
}

const likeRecord = async (collection, id) => {
    const record = await collection.find(id).toArray()
    if (record[0].liked === false) {
        await collection.updateOne(id, {$set:{liked: true, disliked: false}})
        return await collection.find(id).toArray()
    } else {
        await collection.updateOne(id, {$set:{liked: false}})
        return await collection.find(id).toArray()
    }
}

const dislikeRecord = async (collection, id) => {
    const record = await collection.find(id).toArray()
    if (record[0].disliked === false) {
        await collection.updateOne(id, {$set:{disliked: true, liked: false}})
        return await collection.find(id).toArray()
    } else {
        await collection.updateOne(id, {$set:{disliked: false}})
        return await collection.find(id).toArray()
    }
}

module.exports.getAllRecords = getAllRecords
module.exports.getCurrentRecordId = getCurrentRecordId
module.exports.getRecordById = getRecordById
module.exports.recordToAdd = recordToAdd
module.exports.addRecord = addRecord
module.exports.deleteRecord = deleteRecord
module.exports.likeRecord = likeRecord
module.exports.dislikeRecord = dislikeRecord