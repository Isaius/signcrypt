import { Router } from 'express'

import GenerationController from './controllers/GenerationController'
import SignController from './controllers/SignController'

const routes = Router()

routes.get('/generation', GenerationController.new)
routes.post('/sign', SignController.sign)
routes.post('/verify', SignController.verify)

export default routes