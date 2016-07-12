export class Person {
  gender: 'male' | 'female';
  age: number;

  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}
