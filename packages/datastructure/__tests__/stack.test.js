import { LinkedListStack } from "../lib";

describe("Linked List Stack", () => {
  let list = new LinkedListStack();

  test("add to stack", () => {
    list.push(5);
    let { value } = list.first;
    list.push(10);
    ({ value } = list.first);
    expect(value).toBe(10);
  });

  test("remove from stack", () => {
    list.pop();
    let { value } = list.first;
    expect(value).toBe(5);
  });
});
