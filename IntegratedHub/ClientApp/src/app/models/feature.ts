export class Feature {

  constructor(Name:string, Description:string, CreatedDate:Date, UpdatedDate:Date, State:boolean) {
    this.Name = Name;
    this.Description = Description;
    this.CreatedDate = CreatedDate;
    this.UpdatedDate = UpdatedDate;
    this.State = State;
  }

  Name: string;
  Description: string;
  CreatedDate: Date;
  UpdatedDate: Date;
  State: boolean;
}
