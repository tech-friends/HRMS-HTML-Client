export class User {
  public email: string;
  public name: string;
  public token: string;

  public static OnSerialized(instance : User, json : any) : void {
      delete json.password;
      delete json.meta;
  }
}
