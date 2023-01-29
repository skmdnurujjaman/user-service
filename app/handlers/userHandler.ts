import { container } from "tsyringe";
import { ErrorResponse } from "../utility/response";
import { UserService } from "../service/userService";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import middy from "@middy/core";
import bodyParser from "@middy/http-json-body-parser";

const service = container.resolve(UserService);

export const Signup = middy((event: APIGatewayProxyEventV2) => {
  //application business logic will be in service
  return service.CreateUser(event);
}).use(bodyParser());

export const Login = async (event: APIGatewayProxyEventV2) => {
  return await service.UserLogin(event);
};

export const Verify = async (event: APIGatewayProxyEventV2) => {
  return await service.VerifyUser(event);
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return await service.CreateProfile(event);
  } else if (httpMethod === "put") {
    return await service.UpdateProfile(event);
  } else if (httpMethod === "get") {
    return await service.GetProfile(event);
  } else {
    return ErrorResponse(404, "Requested Method is not supported!");
  }
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return await service.CreateCart(event);
  } else if (httpMethod === "put") {
    return await service.UpdateCart(event);
  } else if (httpMethod === "get") {
    return await service.GetCart(event);
  } else {
    return ErrorResponse(404, "Requested Method is not supported!");
  }
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return await service.CreatePaymentMethod(event);
  } else if (httpMethod === "put") {
    return await service.UpdatePaymentMethod(event);
  } else if (httpMethod === "get") {
    return await service.GetPaymentMethod(event);
  } else {
    return ErrorResponse(404, "Requested Method is not supported!");
  }
};
