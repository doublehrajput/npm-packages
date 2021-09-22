import { HashTables } from "../lib";

describe("Linked List Queue", () => {
  let heap = new HashTables();

  test("set", () => {
    heap.set("name", "Harish");
    heap.set("email", "doublehrajput@gmail.com");
  });

  test("get", () => {
    expect(heap.get("name")).toBe("Harish");
    expect(heap.get("email")).toBe("doublehrajput@gmail.com");
  });
});
