import jwt from 'jsonwebtoken';
import userAccount from '../models/userModels.js';

const requireAuth = async (req, res, next) => {

    //verify authentication
    const { authorization } = req.headers

    // if(authorization) {
    //     return res.status(200).json({authorization, message: "ok"})
    // }

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" })
    }

    const token = authorization.split(' ')[1]

    // if (authorization) {
    //     // Authorization header exists and has a value
    //     console.log('Authorization header:', authorization);

    //     // You can proceed with handling the authorization header data
    //   } else {
    //     // Authorization header is either undefined or empty
    //     console.log('Authorization header is missing or empty');

    try {

        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await userAccount.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Request is not authorised' })
    }

}


export default requireAuth;