import { UserService } from "../service/userService";
import { APIGatewayProxyEventV2 } from "aws-lambda";

const service = new UserService();

export const Signup = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic will be in service
  return await service.CreateUser(event);
};

export const Login = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic

  return {
    statusCode: 200,
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from login",
      data: {},
    }),
  };
};

export const Verify = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic

  return {
    statusCode: 200,
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from verify",
      data: {},
    }),
  };
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic

  return {
    statusCode: 200,
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from Profile",
      data: {},
    }),
  };
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic

  return {
    statusCode: 200,
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from Cart",
      data: {},
    }),
  };
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
  console.log(event);

  //application business logic

  return {
    statusCode: 200,
    Headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "response from Payment",
      data: {},
    }),
  };
};
