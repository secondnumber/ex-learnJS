//deep copy

let cource = {
    name: 'English',
    maxStudentsAmount: 10,
    isOnline: true,
    students: ['Maria', 'Pavel', 'Irina'],
    class: {
        teacher: {
            name: 'Elena',
            age: 58
        }
    }
};

console.log(cource);

let intensive = {...cource};
intensive.students = [...cource.students];
intensive.class = {...cource.class};
intensive.class.teacher = {...cource.class.teacher};
console.log(intensive);

intensive.class.teacher.name = 'Olga';

