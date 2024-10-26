const express = require('express')
 const router = express.Router()
const getEnvolope = require('../controllers/envolopeControler')


router.get('/', getEnvolope.getEnvelopes)
router.get('/:id', getEnvolope.getEnvelopeById)
router.post('/', getEnvolope.addEnv)
router.put('/:id', getEnvolope.updateEnvelopeById)
module.exports = router;
