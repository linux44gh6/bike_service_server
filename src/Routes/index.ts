import express from 'express';
import { customerRoutes } from '../app/modules/customers/customer.routes';
import { bikeRoutes } from '../app/modules/bikes/bike.routes';
import { serviceRoutes } from '../app/modules/service/service.routes';
const router = express.Router();
const moduleRoutes=[
    {
        path:"/customers",
        route:customerRoutes
    },
    {
        path:"/bikes",
        route:bikeRoutes
    },
    {
        path:"/services",
        route:serviceRoutes
    }
]
moduleRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})
export default router