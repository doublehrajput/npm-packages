import { LinkedListQueue } from "../lib";

describe("Linked List Queue", () => {
  let list = new LinkedListQueue();

  test("enqueue", () => {
    list.enqueue(5);
    let { value } = list.first;
    list.enqueue(10);
    ({ value } = list.last);
    expect(value).toBe(10);
  });

  test("dequeue", () => {
    list.dequeue();
    let { value } = list.first;
    expect(value).toBe(10);
  });
});
