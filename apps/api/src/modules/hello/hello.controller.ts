import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { API_ROUTES, EApiControllers } from "@monorepo/constants/apiRoutes";
import { HelloService } from "./hello.service";
import { TResponse } from "@monorepo/types/TResponse";
import { makeErrorMessage } from "../../utils/makeErrorMessage";
import { CreateStringWithDateDto } from "./dtos/create-string-with-date.dto";

@ApiTags("Hello")
@Controller(EApiControllers.HELLO)
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @ApiOperation({
    summary: "Get Hello string",
  })
  @Get(API_ROUTES.SAY_HELLO.action)
  async getHello(): Promise<TResponse<string>> {
    try {
      const _result = await this.helloService.getHello();

      return {
        isError: false,
        data: _result,
      };
    } catch (e) {
      return {
        isError: true,
        errorMessage: makeErrorMessage(e),
      };
    }
  }

  @ApiOperation({
    summary: "Get Hello string with sent datetime",
  })
  @Post(API_ROUTES.SAY_SOMETHING_WITH_DATE.action)
  async create(
    @Body() userData: CreateStringWithDateDto
  ): Promise<TResponse<string>> {
    try {
      const _result = await this.helloService.getStringWithDate(userData);

      return {
        isError: false,
        data: _result,
      };
    } catch (e) {
      return {
        isError: true,
        errorMessage: makeErrorMessage(e),
      };
    }
  }
}
