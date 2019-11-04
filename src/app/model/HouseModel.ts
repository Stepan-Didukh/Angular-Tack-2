import {UserModel} from "./Usermodel";

export interface HouseModel {
  id: number,
  Owner: UserModel,
  Street: string,
  Area: number,
  Price: number,
}
