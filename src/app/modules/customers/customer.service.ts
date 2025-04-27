import { Customer, PrismaClient } from "../../../../generated/prisma"

const prisma=new PrismaClient()

//* Function to create a new customer
const createCustomer=async(customerData:Customer)=>{
    try{
     const isUserExist=  await prisma.customer.findUnique({
            where:{
                email:customerData.email
            }
        })
        if(isUserExist){
            throw new Error("User already exists")
        }
        const result=await prisma.customer.create({
            data: customerData
        })
        return result
    }catch(err){
        throw new Error(`Error creating customer: ${err}`)
    }
}

//* Function to get all customers
const getAllCustomers=async()=>{
    try{
        const result=await prisma.customer.findMany()
        return result
    }catch(err){
        throw new Error(`Error getting customers: ${err}`)
    }
}

//* Function to get a customer by ID
const getCustomerById=async(customerId:string)=>{
    try{
        const isUserExist=await prisma.customer.findUnique({
            where:{
                customerId
            }
        })
        if(!isUserExist){
            throw new Error("User not found")
        }
        const result=await prisma.customer.findUnique({
            where:{
                customerId
            }
        })
        return result
    }catch(err){
        throw new Error(`Error getting customer: ${err}`)
    }
}

//*Update customer by ID
const updateCustomerById=async(customerId:string,customerData:Customer)=>{
    try{
        const isUserExist=await prisma.customer.findUnique({
            where:{
                customerId
            }
        })
        if(!isUserExist){
            throw new Error("User not found")
        }
        const result=await prisma.customer.update({
            where:{
                customerId
            },
            data:customerData
        })
        return result
    }catch(err){
        throw new Error(`Error updating customer: ${err}`)
    }
}

//*delete customer by ID
const deleteCustomerById=async(customerId:string)=>{
    try{
        const isUserExist=await prisma.customer.findUnique({
            where:{
                customerId
            }
        })
        if(!isUserExist){
            throw new Error("User not found")
        }
        const result=await prisma.customer.delete({
            where:{
                customerId
            }
        })
        return result
    }catch(err){
        throw new Error(`Error deleting customer: ${err}`)
    }
}

export const customerService={
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById
}