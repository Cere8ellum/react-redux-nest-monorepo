/******************************VALIDATORS********************************/
export type TValidator = {
  errors: string[];
  pattern: string | RegExp;
};

export type TFileValidator = {
  errors: string[];
  allowedExtensions: string[];
  maxFileSize: number;
};

const ANY_CHAR_REGEX = ".{1,}";

export const isRequiredProps = (): TValidator => {
  return {
    errors: ["Поле обязательно"],
    pattern: ANY_CHAR_REGEX,
  };
};

export const isPasswordProps = (): TValidator => {
  const minLen = 8;
  const maxLen = 20;

  return {
    errors: [
      "Длина от " + minLen + " до " + maxLen,
      "Может содержать только латинские буквы, цифры, и символы !@#$%^&*_-",
    ],
    pattern:
      "^[a-zA-Z0-9!@#$%^&*_\\-]{" + (minLen - 1) + "," + (maxLen - 1) + "}$",
  };
};

export const isUsernameProps = (): TValidator => {
  const minLen = 4;
  const maxLen = 25;

  return {
    errors: [
      "Начинается с буквы",
      "Длина от " + minLen + " до " + maxLen,
      "Может содержать только буквы, цифры, пробелы и символы _-",
    ],
    pattern:
      "^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z0-9_\\-\\s]{" +
      (minLen - 1) +
      "," +
      (maxLen - 1) +
      "}$",
  };
};

export const isEmailProps = (): TValidator => {
  return {
    errors: ["Требуется email в фомате 'название@caйт.домен'"],
    pattern:
      // eslint-disable-next-line max-len
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };
};
