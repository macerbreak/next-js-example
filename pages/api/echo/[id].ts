import {NextApiRequest, NextApiResponse} from "next";

const getIdFromLink = (req:NextApiRequest,res:NextApiResponse) =>{
    res.status(200).json({yourId: req.query.id})
}
export default getIdFromLink