import { ISubject } from './interface';

export class Subject implements ISubject {
  subscribers = [];
  subscribe(observer) {
    this.subscribers.push(observer)
  }
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber !== observer);
  }
  notify(data) {
    this.subscribers.map(subscriber => subscriber(data));
  }
}