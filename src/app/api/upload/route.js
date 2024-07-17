import uniqid from "uniqid"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"


export async function POST(req) {
    const data = await req.formData()
    if (data.get('file')) {
        const file = data.get('file')

        const s3Client = new S3Client({
            region: 'us-west-2',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRETY_KEY,
            },
        });

        const ext = file.name.split('.').slice(-1)[0];
        const newFileName = uniqid() + '.' + ext;

        const chunks = [];
        for await (const chunk of file.stream()) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks)

        const bucket = '100hours-fullstack'
        await s3Client.send(new PutObjectCommand({
            Bucket: bucket,
            Key: newFileName,
            ACL: 'public-read',
            ContentType: file.type,
            Body: buffer
        }))

        const link = 'https://' + bucket + '.s3.amazonaws.com/'+newFileName
        return Response.json(link)
    }
    return Response.json(true)
}