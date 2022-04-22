// export an account class

module.exports = class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  // add the amount to the balance
  credit(amount) {
    this.balance += amount;
  }

  // return description
  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
};