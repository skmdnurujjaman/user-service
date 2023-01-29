import { APIGatewayProxyEventV2 } from "aws-lambda";

export class UserService {
  construcor() {}

  async CreateUser(event: APIGatewayProxyEventV2) {
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
  }
}
