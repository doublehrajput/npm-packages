import { BinarySearchTree } from "../lib";

describe("Linked List Queue", () => {
  let bst = new BinarySearchTree();

  test("insert", () => {
    bst.insert(10);
    bst.insert(7);
    bst.insert(12);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(7);
    expect(bst.root.right.value).toBe(12);
  });

  test("search", () => {
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(11)).toBe(false);
  });

  test("breathfirstsearch", () => {
    let data = bst.breathfirstsearch();
    expect(data).toStrictEqual([10, 7, 12]);
  });

  test("deapthfirstsearch preorder", () => {
    let data = bst.depthfirstpreorder();
    expect(data).toStrictEqual([10, 7, 12]);
  });

  test("deapthfirstsearch postorder", () => {
    let data = bst.depthfirstpostorder();
    expect(data).toStrictEqual([7, 12, 10]);
  });

  test("deapthfirstsearch inorder", () => {
    let data = bst.depthfirstinorder();
    expect(data).toStrictEqual([7, 10, 12]);
  });
});
