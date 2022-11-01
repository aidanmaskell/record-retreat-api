const getCollection = require('../Services/dbService')
const createJsonResponse = require('../Services/jsonResponseService')
const recordService = require('../Services/recordService')
const validationService = require ('../Services/validationService')

const homePageController = (req, res) => {
    const collection = getCollection()
    const records = recordService.getAllRecords(collection)

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

// const deleteRecordController = async (req, res) => {
//     const id = recordService.getCurrentRecordId(req)
//     const collection = await getCollection()

// }

module.exports.homePageController = homePageController
module.exports.addRecordController = addRecordController
module.exports.getRecordController = getRecordController
// module.exports.deleteRecordController = deleteRecordController