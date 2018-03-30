import { PersonFactory } from './factory';

const people = [18, 66, 24, 76].map(age => PersonFactory.createPerson(age));
people.map(p => p.getStatus());