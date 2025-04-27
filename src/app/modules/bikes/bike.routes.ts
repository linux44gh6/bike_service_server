import express from 'express';
import { bikeController } from './bike.controller';
const router = express.Router();

router.post('/',bikeController.createBike)
router.get('/',bikeController.getAllBikes)
router.get('/:bikeId',bikeController.getBikeById)
export const bikeRoutes = router;