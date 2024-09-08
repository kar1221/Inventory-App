interface IServerCategoryAction {
  category: string;
}

interface IServerUserAuthAction {
  username: string;
  password: string;
}

export type { IServerCategoryAction, IServerUserAuthAction };
