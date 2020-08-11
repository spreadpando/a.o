import aws, { config } from 'aws-sdk'

export default async (req, res) => {
    const {
        query: { tid },
        } = req
    try {
        aws.config.setPromisesDependency()
        const s3 = new aws.S3({endpoint:'nyc3.digitaloceanspaces.com'});
        const response = await s3.getObject({
            Bucket: 'data-pando-systems',
            Key: `tracks/${tid}`
        }).promise()
        res.send(response.Body)
    } catch (e) {
        console.log('our error', e)
    }
}