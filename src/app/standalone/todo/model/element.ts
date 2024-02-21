export class Element {
  title: string;
  isDone: boolean;

  constructor(title: string, isDone?: boolean) {
    this.title = title;
    this.isDone = isDone != null;
  }
}
