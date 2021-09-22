import { MaxBinaryHeap } from "../lib";

describe("Linked List Queue", () => {
  let heap = new MaxBinaryHeap();

  test("insert", () => {
    heap.insert(10);
    heap.insert(7);
    heap.insert(12);
    heap.insert(30);

    expect(heap.values).toStrictEqual([30, 12, 10, 7]);
  });

  test("remove", () => {
    heap.pop();
    expect(heap.values).toStrictEqual([12, 7, 10]);
    heap.pop();
    expect(heap.values).toStrictEqual([10, 7]);
    heap.pop();
    expect(heap.values).toStrictEqual([7]);
    heap.pop();
    expect(heap.values).toStrictEqual([]);
  });
});
