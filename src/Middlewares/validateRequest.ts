import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export const validateRequest = (schema:AnyZodObject) => {
 try{
    return (req: Request, res: Response, next: NextFunction) => {
      const valid=schema.parseAsync({
        body:req.body
      })
       next();
     };
 }catch(e){
  throw new Error('Validation Error')
 }
};
