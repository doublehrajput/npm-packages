import { SinglyLinkedList } from '../lib'

const list = new SinglyLinkedList()

describe('Describe single linked list', () => {

  test('Push to 10 to empty Linked list.', () => {
    list.push(10);

    expect(list.length).toBe(1)
    expect(list.head.value).toBe(10)
    expect(list.tail.value).toBe(10)
  });

  test('Push 30', () => {
    list.push(30);

    expect(list.length).toBe(2)
    expect(list.head.next.value).toBe(list.tail.value)
    expect(list.tail.value).toBe(30)
  });

  test('Push 50', () => {
    list.push(50);

    expect(list.length).toBe(3)
    expect(list.head.next.next.value).toBe(list.tail.value)
    expect(list.tail.value).toBe(50)
  });

  test('pop element', () => {
    list.pop();

    expect(list.length).toBe(2)
    expect(list.head.next.value).toBe(list.tail.value)
    expect(list.tail.value).toBe(30)
  });

  test('pop element', () => {
    list.pop();

    expect(list.length).toBe(1)
    expect(list.head.value).toBe(list.tail.value)
    expect(list.tail.value).toBe(10)
  });

  test('pop element', () => {
    list.pop();

    expect(list.length).toBe(0)
    expect(list.tail).toBe(null)
  });

  test('shift ', () => {
    list.push(2)
    list.push(4)
    list.push(6)

    list.shift();
    expect(list.length).toBe(2)
    expect(list.head.value).toBe(4)

    list.shift();
    expect(list.length).toBe(1)
    expect(list.head.value).toBe(6)


    list.shift();
    expect(list.length).toBe(0)
    expect(list.head).toBe(null)
  });

  test('unshift ', () => {
    list.unshift(10);
    expect(list.length).toBe(1)
    expect(list.head.value).toBe(list.tail.value)

    list.unshift(5);
    expect(list.length).toBe(2)
    expect(list.head.value).toBe(5)
    expect(list.tail.value).toBe(10)

  });

  test('get ', () => {
    let { value } = list.get(1);
    expect(value).toBe(10);
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

  test('reverse', () => {
    list.reverse();
    expect(list.tail.value).toBe(5)
  });


});

