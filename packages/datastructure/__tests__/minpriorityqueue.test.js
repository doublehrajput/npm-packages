import { MinPriorityQueue } from "../lib";

describe("Min Priority Queue", () => {
  let heap = new MinPriorityQueue();
  let getValues = (n) => n.priority;

  test("enqueue", () => {
    heap.enqueue("cold", 5);
    heap.enqueue("gunshot wound", 1);
    heap.enqueue("fever ", 2);

    expect(heap.values.map(getValues)).toStrictEqual([1, 5, 2]);
  });

  test("remove", () => {
    heap.dequeue();
    expect(heap.values.map(getValues)).toStrictEqual([2, 5]);
    heap.dequeue();
    expect(heap.values.map(getValues)).toStrictEqual([5]);
    heap.dequeue();
    expect(heap.values.map(getValues)).toStrictEqual([]);
  });
});
