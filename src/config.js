const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-bertuccis",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://oiiiyhqe5c.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_USNRVjxhv",
      APP_CLIENT_ID: "5kps6iqdsmd2e0k997ftmuvcpg",
      IDENTITY_POOL_ID: "us-east-2:be837273-792a-4dbb-9c7f-da6cd3cd64c3",
    },
};
  
export default config;