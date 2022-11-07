const getCollection = require('../Services/dbService')
const createJsonResponse = require('../Services/jsonResponseService')
const recordService = require('../Services/recordService')
const validationService = require ('../Services/validationService')

const homePageController = async (req, res) => {
    const collection = await getCollection()
    const records = await recordService.getAllRecords(collection)
    
    res.json(createJsonResponse(records)) 
}

const addRecordController = async (req, res) => {
    const recordData = await req.body
    if (validationService.validateRecord(recordData)) {
        const record = await recordService
        .recordToAdd(
            recordData.artist, 
            recordData.title, 
            recordData.year, 
            recordData.img, 
            recordData.songLink)
        const collection = await getCollection()
        await recordService.addRecord(collection, record)

        await res.json(createJsonResponse(recordData))
    } else {
        await res.json(createJsonResponse('', false, 'invalid record data', 400))
    }
}

const getRecordController = async (req, res) => {
    const id = recordService.getCurrentRecordId(req)
    if (id) {
        const collection = await getCollection()
        const record = await recordService.getRecordById(collection, id)
        if (record) {
            await res.json(createJsonResponse(record))
        } else {
            await res.json(createJsonResponse('', false, 'id not in db', 400))
        }
    } else {
        await res.json(createJsonResponse('', false, 'invalid record id', 400))
    }
}

const deleteRecordController = async (req, res) => {
    const id = await recordService.getCurrentRecordId(req)
    const collection = await getCollection()
    const deleted = await recordService.deleteRecord(collection, id)
    res.json(createJsonResponse(deleted))
}

const likeRecordController = async (req, res) => {
    const id = await recordService.getCurrentRecordId(req)
    const collection = await getCollection()
    const liked = await recordService.likeRecord(collection, id)
    res.json(createJsonResponse(liked))
}

const dislikeRecordController = async (req, res) => {
    const id = await recordService.getCurrentRecordId(req)
    const collection = await getCollection()
    const disliked = await recordService.dislikeRecord(collection, id)
    res.json(createJsonResponse(disliked))
}

module.exports.homePageController = homePageController
module.exports.addRecordController = addRecordController
module.exports.getRecordController = getRecordController
module.exports.deleteRecordController = deleteRecordController
module.exports.likeRecordController = likeRecordController
module.exports.dislikeRecordController = dislikeRecordController