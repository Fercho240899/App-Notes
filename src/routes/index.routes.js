const {Router} = require ('express')
const router = Router();

const { renderIndex, renderAbout, renderLogin, renderRegister} = require('../controllers/index.controller')

router.get('/',renderIndex)

router.get('/about',renderAbout)

router.get('/login',renderLogin)

router.get('/register',renderRegister)

module.exports = router;