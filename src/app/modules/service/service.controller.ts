import { catchAsync } from "../../../Utils/catchAsync";
import { sendResponse } from "../../../Utils/sendResponse";
import { serviceManagementService } from "./service.service";

const createService = catchAsync(async(req: any, res: any) => {
    const serviceData = req.body;
    const result = await serviceManagementService.createService(serviceData);
    sendResponse(res, {
        statusCode: 200,
        message: "Service created successfully",
        data: result,
        success: true,
    });
})

const getAllServices = catchAsync(async(req: any, res: any) => {
    const result = await serviceManagementService.getAllServices();
    sendResponse(res, {
        statusCode: 200,
        message: "Services fetched successfully",
        data: result,
        success: true,
    });
})

const getServiceById = catchAsync(async(req: any, res: any) => {
    const { serviceId } = req.params;
    const result = await serviceManagementService.getServiceById(serviceId);
    sendResponse(res, {
        statusCode: 200,
        message: "Service fetched successfully",
        data: result,
        success: true,
    });
})

const updateServiceById = catchAsync(async(req: any, res: any) => {
    const { serviceId } = req.params;
    const serviceData = req.body;
    const result = await serviceManagementService.updateServiceById(serviceId, serviceData);
    sendResponse(res, {
        statusCode: 200,
        message: "Service updated successfully",
        data: result,
        success: true,
    });
})


const retriveDataByStatus = catchAsync(async(req: any, res: any) => {
    const result = await serviceManagementService.retriveDataByStatus();
    sendResponse(res, {
        statusCode: 200,
        message: "Services fetched successfully",
        data: result,
        success: true,
    });
});
export const serviceManagementController = {
    createService,
    getAllServices,
    getServiceById,
    updateServiceById,
    retriveDataByStatus,
}