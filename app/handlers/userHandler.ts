import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Signup = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic

  return {
    statusCode: 200,
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from signup",
      data: {},
    }),
  };
};
