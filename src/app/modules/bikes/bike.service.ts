import { Bike, PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient()

//* Function to create a new bike
const createBike = async (bikeData: Bike) => {
    console.log("bikeData", bikeData);
    try { 
        const result = await prisma.bike.create({
            data: bikeData
        })
        return result
    } catch (err) {
        throw new Error(`Error creating bike: ${err}`)
    }
}

//* Function to get all bikes
const getAllBikes = async () => {
    try {
        const result = await prisma.bike.findMany()
        return result
    } catch (err) {
        throw new Error(`Error getting bikes: ${err}`)
    }
}

//* Function to get a bike by ID
const getBikeById = async (bikeId: string) => {
    try {
        const isBikeExist = await prisma.bike.findUnique({
            where: {
                bikeId
            }
        })
        if (!isBikeExist) {
            throw new Error("Bike not found")
        }
        const result = await prisma.bike.findUnique({
            where: {
                bikeId
            }
        })
        return result
    } catch (err) {
        throw new Error(`Error getting bike: ${err}`)
    }
}
export const bikeService = {
    createBike,
    getAllBikes,
    getBikeById,
}