import { HttpStatus } from "@nestjs/common";

export function makeErrorMessage(error: unknown, message?: string) {
  const defaultMessage = "An unexpected error occurred (code -b).";

  // If DEV - show original
  if (process.env.NODE_ENV === "development") {
    if (error instanceof Error) {
      return message ?? error.message;
    } else if (error instanceof ArrayOfErrorsException) {
      return message ?? error.error.message;
      // Else - show default
    } else {
      return defaultMessage;
    }
  }
  // Else - show default
  return defaultMessage;
}

export class ArrayOfErrorsException {
  private status;
  private message;

  constructor(status: HttpStatus, messagesArray: string[]) {
    this.status = status;
    this.message = messagesArray;
  }

  public get error(): { status: HttpStatus; message: string[] } {
    return { status: this.status, message: this.message };
  }
}
