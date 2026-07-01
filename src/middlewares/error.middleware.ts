import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/ApiError";


const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
            data: err.data,
        });

        return;
    }

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errors: [],
        data: null,
    });
};

export default errorMiddleware;