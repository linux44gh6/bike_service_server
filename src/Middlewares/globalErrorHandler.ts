import { StatusCodes } from "http-status-codes"

export const globalErrorHandler = (err: any, req: any, res: any, next: any) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        status: 'error',
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}