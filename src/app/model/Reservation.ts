import {Person} from "./Person";

export interface Reservation{
  id: number;
  name: string;
  context: string;
  date : Date;
  duration: string;
  person : Person;
}
