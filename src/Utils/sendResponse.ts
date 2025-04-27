
export const sendResponse = (res: any, responseData:any) => {
    const { statusCode, message, data,success } = responseData;
    res.status(statusCode).json({
        success:success||false,
        status: statusCode,
        message: message||'',
        data: data || null,
    });
}