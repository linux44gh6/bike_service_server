import { sendResponse } from "../../../Utils/sendResponse";
import { catchAsync } from "../../../Utils/catchAsync";
import { bikeService } from "./bike.service";

const createBike =catchAsync(async (req: any, res: any) => {
    const bikeData = req.body;
    const result = await bikeService.createBike(bikeData);
    sendResponse(res, {
        statusCode: 200,
        message: "Bike created successfully",
        data: result,
        success: true,
    });
});

const getAllBikes = catchAsync(async (req: any, res: any) => {
    const result = await bikeService.getAllBikes();
    sendResponse(res, {
        statusCode: 200,
        message: "Bikes fetched successfully",
        data: result,
        success: true,
    });
});
const getBikeById = catchAsync(async (req: any, res: any) => {
    const { bikeId } = req.params;
    const result = await bikeService.getBikeById(bikeId);
    sendResponse(res, {
        statusCode: 200,
        message: "Bike fetched successfully",
        data: result,
        success: true,
    }); 
});

export const bikeController = {
    createBike,
    getAllBikes,
    getBikeById,
}