export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    this.setName(name);
    this.setLength(length);
    this.setStudents(students);
  }

  // Getter and Setter for name
  getName() {
    return this._name;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and Setter for length
  getLength() {
    return this._length;
  }

  setLength(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and Setter for students
  getStudents() {
    return this._students;
  }

  setStudents(students) {
    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
