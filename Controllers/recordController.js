const getCollection = require('../Services/dbService')
const createJsonResponse = require('../Services/jsonResponseService')
const getAllRecords = require('../Services/recordService')

const homePageController = (req, res) => {
    const collection = getCollection()
    const records = getAllRecords(collection)

    res.json(createJsonResponse(records)) 
}

module.exports.homePageController = homePageController