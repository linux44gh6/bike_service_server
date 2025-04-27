import express from 'express';
import { serviceManagementController } from './service.controller';
import { validateRequest } from '../../../Middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
const router = express.Router();

router.post('/',serviceManagementController.createService)
router.get('/',serviceManagementController.getAllServices)
router.get('/:serviceId',serviceManagementController.getServiceById)
router.get('/status',serviceManagementController.retriveDataByStatus)
router.patch('/:serviceId',validateRequest(ServiceValidation.serviceUpdateSchema),serviceManagementController.updateServiceById)
export const serviceRoutes = router;