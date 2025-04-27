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
export const bikeController = {
    createBike,
}