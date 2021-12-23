const { S3Client,  PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");

const endpoint = "http://init.so";

async function streamToString(stream) {
  return await new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('error', reject);
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
  })
}

const s3 = new S3Client({
    region: "decentralized",
    endpoint,
    credentials: {
      accessKeyId: "test key id",
      secretAccessKey: "test secret key",
  },
});

(async () => {

  const params = {
    Bucket: "flux",
    Key: "QmUASrKutAt5ckmkgDxK4657gdTfaKKYzK9ZQ1MbrcWZqF"
  };

  console.log("start")

  let start = new Date().getTime()
  const result = await s3.send(new GetObjectCommand(params));

  const contents = await streamToString(result.Body);
  let end = new Date().getTime()
  console.log(end - start);
})();
