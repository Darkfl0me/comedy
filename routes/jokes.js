const router = require('express').Router()
const jokesController = require('../controllers/jokeController')
const authController = require('../controllers/authController')
const auth = require('../middlewares/auth')

/**
 * @api {post} /api/v1/register Register user 
 * @apiVersion 1.0.0
 * @apiName RegisterUser
 * @apiGroup User
 * 
 * @apiSuccess {json} AuthToken Returns authtoken to the user
 * @apiSuccessExample {json} Response-Example:
 * {
 *  auth: true
 *  token: {AUTHTOKEN}
 * }
 */
router.post('/register', 
    (req, res, next) => {
        authController.registerUser(req, res)
            .then(response => res.send(response))
            .catch(err => next(err))
    }
)

/**
 * @api {post} /api/v1/delete Delete a single joke
 * @apiVersion 1.0.0
 * @apiName DeleteJoke
 * @apiGroup Jokes
 * 
 * @apiHeader {String} authorization Pass the auth token as a header parameter 
 * @apiHeaderExample {json} Header-Example:
 * {
 *  "authorization": "bearer {Your authtoken}"
 * }
 * 
 * @apiParam {String} id Id of the joke passed as a body parameter
 */
router.post('/delete',
    (req, res, next) => {
        auth.isAuthenticated(req, res)
            .then(() => next())
            .catch(err => next(err))
    },
    (req, res, next) => 
        jokesController.removeJoke(req, res)
            .then(res => res.send(res))
            .catch(err => next(err))
)

/**
 * @api {get} /api/v1/jokes Get all jokes
 * @apiVersion 1.0.0
 * @apiName GetJokes
 * @apiGroup Jokes
 * 
 * @apiParam {String} [cat] Category of jokes passed as a query parameter
 * @apiParam {String} [inc] Includes id of joke passed as a query parameter
 * 
 * @apiSuccess {Object[]} JokeList List of Jokes
 * 
 * @apiSuccessExample {json} Success-Response:
 * [{
 *  category: [Sarcasm],
 *  title: "",
 *  jokeBody: ""
 * }]        
 * 
 */
router.get('/jokes',
    (req, res, next) => {
        jokesController.getJokes(req, res)
            .then(response => res.send(response))
            .catch(err => next(err))
    }
)

/**
 * @api {post} /api/v1/jokes Create a Joke
 * @apiVersion 1.0.0
 * @apiName CreateJoke
 * @apiGroup Jokes
 * 
 * @apiHeader {String} authorization Pass the auth token as a header parameter 
 * @apiHeaderExample {json} Header-Example:
 * {
 *  "authorization": "bearer {Your authtoken}"
 * }
 * 
 * @apiParam {String} title title of the joke passed as a body paramter 
 * @apiParam {String} jokeBody Content of the joke passed as a body parameter
 * @apiParam {String[]} category category of the joke passed as a body parameter
 * 
 * @apiSuccess {Object} Joke The joke which is created
 * 
 * @apiSuccessExample {json} Success-Response: 
 * {
 *  category: [Sarcasm]
 *  title: "Title of the joke"
 *  jokeBody: "Content of the joke"
 * }
 */
router.post('/jokes', 
    (req, res, next) => {
        auth.isAuthenticated(req, res)
            .then(() => next())
            .catch(err => next(err))
    },
    (req, res, next) => {
        jokesController.postJokes(req, res)
            .then(response => res.send(response))
            .catch(err => next(err))        
    } 
)

router.use((err, req, res, next) => {
    res.json(err)
})



module.exports = router