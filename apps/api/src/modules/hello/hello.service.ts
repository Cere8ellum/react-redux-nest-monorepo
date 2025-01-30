import { Injectable } from "@nestjs/common";
import { CreateStringWithDateDto } from "./dtos/create-string-with-date.dto";
import { dateFromDateType } from "@monorepo/utils/dateFromDateType";

@Injectable()
export class HelloService {
  async getHello(): Promise<string> {
    return await this.getResOrRej("Hello World!");
  }

  async getStringWithDate(data: CreateStringWithDateDto): Promise<string> {
    return await this.getResOrRej(
      `${data.text} from ${dateFromDateType(data.createdAt)}`
    );
  }

  private async getResOrRej(data: string): Promise<string> {
    // Between 1 and 3
    const rnd = Math.floor(Math.random() * 2) + 1;

    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (rnd > 1) {
          resolve(data);
        } else {
          reject("Something went wrong.");
        }
      }, rnd * 500);
    });
  }
}
