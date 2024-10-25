class RandomizedSet {
  private map: Map<number, number>;
  private list: number[];

  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    } else {
      this.map.set(val, this.list.length);
      this.list.push(val);
      return true;
    }
  }

  remove(val: number): boolean {
    let idx = this.map.get(val);
    if (idx !== undefined) {
      let lastElement = this.list[this.list.length - 1];
      this.list[idx] = lastElement;
      this.map.set(lastElement, idx);
      this.list.pop();
      this.map.delete(val);
      return true;
    } else {
      return false;
    }
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
