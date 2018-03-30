export interface ISubject {
  subscribe: Function;
  unsubscribe: Function;
  notify: Function;
}