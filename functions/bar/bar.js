const handler = async ({ queryStringParameters }) => {
  return {
    statusCode: 200,
    body: JSON.stringify(queryStringParameters),
  };
};

module.exports = { handler };
