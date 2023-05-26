import {Request, Response} from "express"
import createUserService from "../../services";

const createUserController = async (req: Request, res: Response) => {

    const user = await createUserService(body);
    return res.status(201).json(user);

}

export default createUserController