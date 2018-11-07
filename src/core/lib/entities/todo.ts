export interface ITodo {
  id?: number;
  title: string;
  description: string;
}

export class Todo implements ITodo {
  constructor (
    public title: string,
    public description: string,
    public id: number,
  ) {}
}
