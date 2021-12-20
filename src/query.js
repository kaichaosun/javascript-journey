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
});

(async () => {

  const params = {
    Bucket: "flux",
    Key: "meta-QmdnCfzXpQi1jDe5hQvguTfUwB5HmzELRBhqQQDTYLqeXE"
  };

  const result = await s3.send(new GetObjectCommand(params));
  console.log("hehe")

  const contents = await streamToString(result.Body);
  console.log(contents)
})();
