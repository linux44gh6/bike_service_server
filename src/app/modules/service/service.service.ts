import { PrismaClient } from "../../../../generated/prisma"

const prisma=new PrismaClient()
const createService = (service: any) => {

    try {
        const result = prisma.service.create({
            data: service
        })
        return result
    } catch (err) {
        throw new Error(`Error creating service: ${err}`)
    }
}

const getAllServices = () => {
    try {
        const result = prisma.service.findMany()
        return result
    } catch (err) {
        throw new Error(`Error getting services: ${err}`)
    }
}

const getServiceById = (serviceId: string) => {
    try {
        const isServiceExist = prisma.service.findUnique({
            where: {
                serviceId
            }
        })
        if (!isServiceExist) {
            throw new Error("Service not found")
        }
        const result = prisma.service.findUnique({
            where: {
                serviceId
            }
        })
        return result
    } catch (err) {
        throw new Error(`Error getting service: ${err}`)
    }
}

const updateServiceById = (serviceId: string, serviceData: any) => {
    try {
        const isServiceExist = prisma.service.findUnique({
            where: {
                serviceId
            }
        })
        if (!isServiceExist) {
            throw new Error("Service not found")
        }
        const result = prisma.service.update({
            where: {
                serviceId
            },
            data: serviceData
        })
        return result
    } catch (err) {
        throw new Error(`Error updating service: ${err}`)
    }
}


const retriveDataByStatus = async () => {
    try {
        const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const result =await prisma.service.findMany({
            where: {
                status:{
                    in:['PENDING','IN_PROGRESS']
                },
                serviceDate:{
                    lt:sevenDaysAgo
                }
            }
        })
        return result
    } catch (err) {
        throw new Error(`Error getting services by status: ${err}`)
    }
}
export const serviceManagementService = {
    createService,
    getAllServices,
    getServiceById,
    updateServiceById,
    retriveDataByStatus
}