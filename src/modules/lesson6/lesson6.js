// task1

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return console.log(this.rate * this.days);
  }
}

const marina = new Worker("marina", "shilec", 10.0, 26);
console.log(marina.getSalary());

// task2

class MyString {
  reverse(string) {
    return string.split([,]).reverse().join([]);
  }
  ucFirst(string) {
    string = string.split([,]);
    string[0] = string[0].toUpperCase();
    string = string.join([]);
    return string;
  }
  ucWords(string) {
    string = string.split(" ");
    string = string.map((element) => this.ucFirst(element));
    string = string.join([" "]);
    return string;
  }
}

const str = new MyString();
console.log(str.reverse("мирон"));
console.log(str.ucFirst("мирон"));
console.log(str.ucWords("мирон любит спать"));
