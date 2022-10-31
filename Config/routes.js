const createJsonResponse = require('../Services/jsonResponseService')
const recordController = require('../Controllers/recordController')

const routes = (app) => {

    app.get('/collection', recordController.homePageController)

    //unsupported enpoints
    const unsupportedRoute = (req, res) => {
        res.json(createJsonResponse([], false, 'unsupported route', 300))
    }

    app.get('/', unsupportedRoute)
    app.post('/', unsupportedRoute)
    app.put('/', unsupportedRoute)
    app.delete('/', unsupportedRoute)

}

module.exports = routes