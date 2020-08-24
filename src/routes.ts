import express from 'express'

import GenerationController from './controllers/GenerationController'
import DecryptController from './controllers/DecryptController'
import EncryptController from './controllers/EncryptController'
import SignController from './controllers/SignController'

const routes = express.Router()

routes.post('/generation', GenerationController.new)
routes.post('/encrypt', EncryptController.encrypt)
routes.post('/decrypt', DecryptController.decrypt)
routes.post('/sign', SignController.sign)
routes.post('/verify', SignController.verify)

export default routes