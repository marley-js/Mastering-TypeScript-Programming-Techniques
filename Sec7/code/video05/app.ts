import { Subject } from './subject';
import { Observer1, Observer2, Observer3 } from './observer';

const mySubject = new Subject();
mySubject.subscribe(Observer1);
mySubject.subscribe(Observer2);
mySubject.subscribe(Observer3);
mySubject.unsubscribe(Observer3);

mySubject.notify('hello world');