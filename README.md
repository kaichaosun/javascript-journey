# Fastly & Storj Integration

I followed the [Storj DCS Object Storage docs](https://docs.fastly.com/en/guides/storj-dcs-object-storage) to add CDN for Storj bucket.

Got this error with aws-s3 javascript client after running the test script,
```
npm install
node src/query.js
```

```
(node:19731) UnhandledPromiseRejectionWarning: TypeError: Cannot read property '#text' of undefined
    at /Users/kcs/github/holo/storj-demo/node_modules/@aws-sdk/client-s3/dist-cjs/protocols/Aws_restXml.js:12897:30
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at async deserializeAws_restXmlGetObjectCommandError (/Users/kcs/github/holo/storj-demo/node_modules/@aws-sdk/client-s3/dist-cjs/protocols/Aws_restXml.js:6256:15)
    at async /Users/kcs/github/holo/storj-demo/node_modules/@aws-sdk/middleware-serde/dist-cjs/deserializerMiddleware.js:6:20
    at async /Users/kcs/github/holo/storj-demo/node_modules/@aws-sdk/middleware-signing/dist-cjs/middleware.js:11:20
    at async StandardRetryStrategy.retry (/Users/kcs/github/holo/storj-demo/node_modules/@aws-sdk/middleware-retry/dist-cjs/StandardRetryStrategy.js:51:46)
    at async /Users/kcs/github/holo/storj-demo/node_modules/@aws-sdk/middleware-logger/dist-cjs/loggerMiddleware.js:6:22
    at async /Users/kcs/github/holo/storj-demo/src/query.js:26:18
(Use `node --trace-warnings ...` to show where the warning was created)
(node:19731) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 13)
(node:19731) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

I also tried aws s3 cli, but got another error, command:
```
aws s3api get-object --key meta-QmdnCfzXpQi1jDe5hQvguTfUwB5HmzELRBhqQQDTYLqeXE --bucket flux --no-sign-request --endpoint-url http://flux.init.so test.result
```
```
An error occurred (400) when calling the GetObject operation: Bad Request
```
