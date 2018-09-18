const router = require('express').Router()
const jokesController = require('../controllers/jokeController')
const authController = require('../controllers/authController')
const auth = require('../middlewares/auth')

router.post('/register', 
    (req, res, next) => {
        authController.registerUser(req, res)
            .then(response => res.send(response))
            .catch(err => next(err))
    }
)

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

router.get('/jokes',
    (req, res, next) => {
        jokesController.getJokes(req, res)
            .then(response => res.send(response))
            .catch(err => next(err))
    }
)

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
    res.send(JSON.stringify(err))
})



module.exports = router