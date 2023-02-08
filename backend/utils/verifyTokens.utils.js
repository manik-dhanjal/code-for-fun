import jwt from "jsonwebtoken"
import { createError } from "./error.utils.js"

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token
    if(!token) return next(createError(401,"Not authorized!"))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    })
}