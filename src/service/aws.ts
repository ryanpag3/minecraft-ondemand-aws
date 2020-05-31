import AWS from 'aws-sdk';
import logger from '../util/logger';

const ec2 = new AWS.EC2({
    region: process.env.REGION,
    credentials: AWS.config.credentials
});

/**
 * Stop the minecraft instance.
 * @param instanceId - The AWS instance ID of the EC2 instance running minecraft.
 */
export const stopInstance = async (instanceId: string) => {
    const params = {
        InstanceIds: [
            instanceId
        ]
    };
    const res = await ec2.stopInstances(params).promise();
    logger.info(JSON.stringify(res, null, 4));
    return res;
}

/**
 * Start the minecraft instance.
 * @param instanceId - The AWS instance ID of the EC2 instance running minecraft.
 */
export const startInstance = async(instanceId: string) => {
    const params = {
        InstanceIds: [
            instanceId
        ]
    };
    const res = await ec2.startInstances(params).promise();
    logger.info(JSON.stringify(res, null, 4));
    return res;
}

const AwsService = {
    stopInstance,
    startInstance
};

export default AwsService;