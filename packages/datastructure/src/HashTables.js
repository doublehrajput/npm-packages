class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];

      let value = String.prototype.charCodeAt.call(char) - 96;
      total += total * prime + value;
    }

    return total % this.keyMap.length;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return undefined;
    }

    let [, value] = this.keyMap[index].find(([k]) => k == key);
    return value;
  }

  keys() {
    let arr = this.keyMap.filter(Boolean).values();

    return {
      [Symbol.iterator]: function* () {
        for (const iterator of arr) {
          for (const [key] of iterator) {
            yield key;
          }
        }
      },
    };
  }

  values() {
    let arr = this.keyMap.filter(Boolean).values();

    return {
      [Symbol.iterator]: function* () {
        for (const iterator of arr) {
          for (const [, value] of iterator) {
            yield value;
          }
        }
      },
    };
  }
}

export default HashTable;
