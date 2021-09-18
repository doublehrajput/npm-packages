import DoublyLinkedList from "../src/DoublyLinkedList";

const list = new DoublyLinkedList()

describe('Describe doubly linked list', () => {

  test('Push 11 to empty Linked list.', () => {
    list.push(11);
    expect(list.length).toBe(1)
    expect(list.head.value).toBe(11)
    expect(list.tail.value).toBe(11)

    list.push(22);
    expect(list.length).toBe(2)
    expect(list.head.next.value).toBe(list.tail.value)
    expect(list.head.value).toBe(list.tail.prev.value)
    expect(list.tail.value).toBe(22)
  });

  test('pop element', () => {
    list.pop();
    expect(list.length).toBe(1)
    expect(list.head.value).toBe(list.tail.value)
    expect(list.tail.value).toBe(11)
    expect(list.tail.next).toBe(null)

    list.pop();
    expect(list.length).toBe(0)
    expect(list.head).toBe(null)
  });

  test('shift ', () => {
    list.push(3)
    list.push(6)
    list.push(9)

    list.shift();
    expect(list.length).toBe(2)
    expect(list.head.value).toBe(6)

    let head = list.shift();
    expect(list.length).toBe(1)
    expect(list.head.value).toBe(9)
    expect(head.value).toBe(6)
    expect(head.next).toBe(null)
    expect(head.prev).toBe(null)

    list.shift();
    expect(list.length).toBe(0)
    expect(list.head).toBe(null)
  });

  test('unshift ', () => {
    list.unshift(8);
    expect(list.length).toBe(1)
    expect(list.head.value).toBe(list.tail.value)

    list.unshift(5);
    expect(list.length).toBe(2)
    expect(list.head.value).toBe(5)
    expect(list.tail.value).toBe(8)

  });

  test('get ', () => {
    let { value } = list.get(1);
    expect(value).toBe(8);
    ({ value } = list.get(0));
    expect(value).toBe(5);
    value = list.get(8);
    expect(value).toBe(null);
  });


  test('set', () => {
    list.set(1, 100);
    let { value } = list.get(1);
    expect(value).toBe(100)
  });

  test('insert', () => {
    list.insert(2, 1000);
    let { value } = list.get(2);
    expect(value).toBe(1000)

    list.insert(3, 10000);
    ({ value } = list.get(3));
    expect(value).toBe(10000)
  });


  test('remove', () => {
    list.remove(3);
    expect(list.tail.value).toBe(1000)
  });

  // test('reverse', () => {
  //   list.reverse();
  //   expect(list.tail.value).toBe(5)
  // });


});
