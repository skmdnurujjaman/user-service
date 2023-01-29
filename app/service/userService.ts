import { APIGatewayProxyEventV2 } from "aws-lambda";
import { successResponse } from "../utility/response";
import { UserRepository } from "../repository/userRepository";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  // User creation
  async CreateUser(event: APIGatewayProxyEventV2) {
    // console.log(event);
    const body = event.body;
    console.log(body);
    // console.log(this.repository);

    await this.repository.CreateUserOperation();
    return successResponse({ message: "response from create user" });
  }
  // User Login
  async UserLogin(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from login user" });
  }

  // Validate User
  async VerifyUser(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from verify user" });
  }
  // User Profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from create user profile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from get user profile" });
  }

  async UpdateProfile(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from edit user profile" });
  }

  //cart section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from create cart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from get cart" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from update cart" });
  }

  //payment section
  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from create payment method" });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from create payment method" });
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return successResponse({ message: "response from create payment method" });
  }
}
