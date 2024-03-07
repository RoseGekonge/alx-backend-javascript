class HolbertonCourse {
    constructor(name, length, students) {
        // Verify the type of attributes
        if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
            throw new Error('Invalid input types. name must be a string, length must be a number, and students must be an array.');
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        if (typeof newName !== 'string') {
            throw new Error('Invalid input type. name must be a string.');
        }
        this._name = newName;
    }

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length
    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new Error('Invalid input type. length must be a number.');
        }
        this._length = newLength;
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // Setter for students
    set students(newStudents) {
        if (!Array.isArray(newStudents)) {
            throw new Error('Invalid input type. students must be an array.');
        }
        this._students = newStudents;
    }
}

