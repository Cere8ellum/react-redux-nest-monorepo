export enum EApiControllers {
  AUTH = "auth",
  USER = "user",
  HELLO = "hello",
}

export enum EApiRoutes {
  MAIN = "MAIN",
}

type TRoute = {
  [index: string]: {
    controller: EApiControllers;
    action: string;
    route: EApiRoutes;
  };
};

export const API_ROUTES: TRoute = {
  // Hello
  SAY_HELLO: {
    controller: EApiControllers.HELLO,
    action: "say-hello",
    route: EApiRoutes.MAIN,
  },
  SAY_SOMETHING_WITH_DATE: {
    controller: EApiControllers.HELLO,
    action: "say-something-with-date",
    route: EApiRoutes.MAIN,
  },
};
