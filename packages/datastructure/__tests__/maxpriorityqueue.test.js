import { MaxPriorityQueue } from "../lib";

describe("Max Priority Queue", () => {
  let heap = new MaxPriorityQueue();
  let getValues = (n) => n.priority;

  test("enqueue", () => {
    heap.enqueue("cold", 1);
    heap.enqueue("gunshot wound", 5);
    heap.enqueue("fever ", 2);

    expect(heap.values.map(getValues)).toStrictEqual([5, 1, 2]);
  });

  test("remove", () => {
    heap.dequeue();
    expect(heap.values.map(getValues)).toStrictEqual([2, 1]);
    heap.dequeue();
    expect(heap.values.map(getValues)).toStrictEqual([1]);
    heap.dequeue();
    expect(heap.values.map(getValues)).toStrictEqual([]);
  });
});
