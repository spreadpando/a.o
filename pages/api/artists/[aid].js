import aws, { config } from 'aws-sdk'

export default async (req, res) => {
    const {
        query: { aid },
        } = req
    try {
        const s3 = new aws.S3({endpoint:'nyc3.digitaloceanspaces.com'});
        const response = await s3.listObjectsV2({
            Bucket: 'data-pando-systems',
            Prefix: `tracks/${aid}/`
        }).promise()
        res.send(response.Contents)
    } catch (e) {
        console.log('our error', e)
    }
}