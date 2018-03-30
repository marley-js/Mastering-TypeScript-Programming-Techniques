import { Adult } from './adult';
import { Pensioner } from './pensioner';

export class PersonFactory {
  public static createPerson(age: number) {
    if (age < 65) {
      return new Adult(age);
    } else {
      return new Pensioner(age);
    }
  }
}