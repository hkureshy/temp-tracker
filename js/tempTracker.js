class TempTracker {
  constructor () {
    this.temp = [];
  }

  set tempratures (value) {
    this.temp.push(value);
  }

  get highest () {
    if (this.temp.length === 0) {
      return 0;
    }
    return this.temp.reduce((n, o) => n > o ? n : o);
  }

  get lowest () {
    if (this.temp.length === 0) {
      return 0;
    }
    return this.temp.reduce((n, o) => n < o ? n : o);
  }

  get average () {
    if (this.temp.length === 0) {
      return 0;
    }
    return this.temp.reduce((n, o) => n + o, 0) / this.temp.length;
  }
}