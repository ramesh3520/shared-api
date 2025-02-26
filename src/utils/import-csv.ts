// import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

// interface AWSConfig {
//     region: string;
//     credentials?: {
//         accessKeyId: string;
//         secretAccessKey: string;
//     };
// }

// const accessKeyId = process.env.AWS_S3_ACCESS_KEY_ID as string;
// const secretAccessKey = process.env.AWS_S3_SECRET_ACCESS_KEY as string;
// const region = process.env.AWS_S3_REGION as string;
// const bucket = process.env.AWS_S3_BUCKET as string;

// const awsConfig: AWSConfig = {
//     region,
//     credentials: {
//         accessKeyId,
//         secretAccessKey,
//     },
// };

// if (process.env.NODE_ENV === 'production') {
//     delete awsConfig.credentials;
// }

// const s3Client = new S3Client(awsConfig);

// const csvToJson = async <T>(key: string, customData?: Record<string, any>): Promise<T> => {
//     const command = new GetObjectCommand({
//         Bucket: bucket,
//         Key: key,
//     });

//     const response = await s3Client.send(command);

//     const csvData = await response.Body?.transformToString();

//     const lines = csvData
//         ?.split('\n')
//         .map(line => line.trim())
//         .filter(line => line !== '');

//     const headers = lines?.length ? lines[0]?.split(',') : [];

//     const result = lines?.slice(1).map(line => {
//         const values = line.split(',');
//         const obj: Record<string, string | undefined> = {};

//         headers?.forEach((header: string, index: number) => {
//             const cleanHeader = header.replace('\r', '').trim();
//             const cleanValue = values[index]?.replace('\r', '').trim() || '';
//             obj[cleanHeader] = cleanValue;
//             obj[cleanHeader] = cleanValue;
//             for (const key in customData) {
//                 obj[key] = customData[key];
//             }
//         });

//         return obj;
//     });

//     return JSON.parse(JSON.stringify(result));
// };

// export { csvToJson };
