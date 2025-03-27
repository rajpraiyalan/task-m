
export default class BaseError extends Error {
  public message: string = "Error";
  public status: number = 400;
  public errors?: any[];
}