import express from 'express';
import { customerController } from './customer.controller';
import { validateRequest } from '../../../Middlewares/validateRequest';
import { CustomerValidation } from './customer.validation';
const router = express.Router();

router.post('/',customerController.createCustomer)
router.get('/',customerController.getAllCustomers)
router.get('/:customerId',customerController.getCustomerById)
router.put('/:customerId',validateRequest(CustomerValidation.updateCustomerZodSchema),customerController.updateCustomerById)
router.delete('/:customerId',customerController.deleteCustomerById)

export const customerRoutes = router
