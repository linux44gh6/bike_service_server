import { sendResponse } from "../../../Utils/sendResponse";
import { catchAsync } from "../../../Utils/catchAsync";
import { customerService } from "./customer.service";

const createCustomer=catchAsync(async (req: any, res: any) => {
    const result=await customerService.createCustomer(req.body);
    sendResponse(res, {
        statusCode: 200,
        message: "Customer created successfully",
        data:result,
        success: true,
    });
    
});
const getAllCustomers=catchAsync(async (req: any, res: any) => {
    const result=await customerService.getAllCustomers();
    sendResponse(res, {
        statusCode: 200,
        message: "Customers fetched successfully",
        data:result,
        success: true,
    });
});

const getCustomerById=catchAsync(async (req: any, res: any) => {
    const { customerId } = req.params;
    const result=await customerService.getCustomerById(customerId);
    sendResponse(res, {
        statusCode: 200,
        message: "Customer fetched successfully",
        data:result,
        success: true,
    });
});

const updateCustomerById=catchAsync(async (req: any, res: any) => {
    const { customerId } = req.params;
    const customerData = req.body;
    const result=await customerService.updateCustomerById(customerId,customerData);
    sendResponse(res, {
        statusCode: 200,
        message: "Customer updated successfully",
        data:result,
        success: true,
    });
});
const deleteCustomerById=catchAsync(async (req: any, res: any) => {
    const { customerId } = req.params;
    const result=await customerService.deleteCustomerById(customerId);
    sendResponse(res, {
        statusCode: 200,
        message: "Customer deleted successfully",
        success: true,
    });
});
export const customerController = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById,
};