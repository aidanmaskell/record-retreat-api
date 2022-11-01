const createJsonResponse = require('../Services/jsonResponseService')
const recordController = require('../Controllers/recordController')

const routes = (app) => {

    app.get('/collection', recordController.homePageController)
    app.post('/collection', recordController.addRecordController)
    app.get('/collection/:id', recordController.getRecordController)
    // app.delete('/collection/:id', recordController.deleteRecordController)

    //unsupported enpoints
    const unsupportedRoute = (req, res) => {
        res.json(createJsonResponse([], false, 'unsupported route', 300))
    }

    app.get('/', unsupportedRoute)
    app.post('/', unsupportedRoute)
    app.put('/', unsupportedRoute)
    app.delete('/', unsupportedRoute)
    app.put('/collection', unsupportedRoute)
    app.delete('/collection', unsupportedRoute)

}

module.exports = routes