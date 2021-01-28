export interface Event {
  id: string;
  userid: string;
  firstName: string;
  lastName: string;
  access: boolean;
  date: string;
}

// this is the user model inside mongo
export interface _Event {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  access: boolean;
  date: string;
  imagePath:string;
}
