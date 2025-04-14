type Student = {
    id: number;
    name: string;
    surname: string;
    age: number;
    marks: number;
};

const students: Student[] = [
    { id: 1, name: "Mano", surname: "Ital", age: 20, marks: 89 },
    { id: 2, name: "Subodh", surname: "Naik", age: 21, marks: 71 },
    { id: 3, name: "Subhash", surname: "Bose", age: 20, marks: 57 },

];

const determineResult = (marks: number): string => {
    if (marks < 40) return "Fail";
    if (marks < 60) return "Pass";
    if (marks < 75) return "First Class";
    return "Distinction";
};

students.forEach((student) => {
    const result = determineResult(student.marks);
    console.log(
        `Student ID: ${student.id}, Name: ${student.name} ${student.surname}, Age: ${student.age}, Marks: ${student.marks}, Result: ${result}`,
    );
}); 