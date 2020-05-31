import { Request, Response } from 'express';
import { validateAuth } from '../util/simple-auth';
import logger from '../util/logger';
import AwsService from '../service/aws';

const stopInstance = async (req: Request, res: Response) => {
    try {
        console.log('request received');
        if (!validateAuth(req))
            return res.sendStatus(401);
        const awsRes = await AwsService.stopInstance(process.env.INSTANCE_ID);
        logger.info(awsRes);
        res.sendStatus(200);
    } catch (e) {
        logger.error(e);
    }
}

const startInstance = async (req: Request, res: Response) => {
    try {
        console.log('request received');
        if (!validateAuth(req))
            return res.sendStatus(401);
        const awsRes = await AwsService.startInstance(process.env.INSTANCE_ID);
        logger.info(awsRes);
        res.sendStatus(200);
    } catch (e) {
        logger.error(e);
    }
}

const IndexController = {
    stopInstance,
    startInstance
};

export default IndexController;