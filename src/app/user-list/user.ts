export interface IUser {
  userId: number;
  userName: string;
  userCode: string;
  DOJ: Date;
  role: string;
  mobile: number;
  salary: number;
  rating: number;
  imageUrl: string;
}
export class User implements IUser {
  constructor(
    public userId: number,
    public userName: string,
    public userCode: string,
    public DOJ: Date,
    public role: string,
    public mobile: number,
    public salary: number,
    public rating: number,
    public imageUrl: string
  ) {}
}
