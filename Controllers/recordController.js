const getCollection = require('../Services/dbService')
const createJsonResponse = require('../Services/jsonResponseService')
const recordService = require('../Services/recordService')

const homePageController = (req, res) => {
    const collection = getCollection()
    const records = recordService.getAllRecords(collection)

    res.json(createJsonResponse(records)) 
}

const addRecordController = async (req, res) => {
    const recordData = await req.body
    const record = await recordService
                    .recordToAdd(
                        recordData.artist, 
                        recordData.title, 
                        recordData.year, 
                        recordData.img, 
                        recordData.songLink)
    console.log(record)
    const collection = await getCollection()
    await recordService.addRecord(collection, recordData)
    await res.json(createJsonResponse(recordData))
}

module.exports.homePageController = homePageController
module.exports.addRecordController = addRecordController