import { Bike } from "../../../../generated/prisma";

const createBike = async (bikeData: Bike) => {
    console.log('bikeData', bikeData);
}
export const bikeService = {
    createBike
}