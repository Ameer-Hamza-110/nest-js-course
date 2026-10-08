import { Injectable, NotFoundException } from '@nestjs/common';

interface StudentType {
    name: string;
    age: number
}

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Ameer Hamza", age: 13 },
        { id: 2, name: "Ali Hamza", age: 15 },
    ]

    getStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((s) => s.id === id);
        if (!student) {
            throw new NotFoundException("Student Not Found")
        }
        return student;
    }

    createStudent(data: StudentType) {
        const newStudent = {
            id: this.students.length + 1,
            ...data
        }
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(id: number, data: StudentType) {
        const sIndex = this.students.findIndex((s) => s.id === id);
        if (sIndex === -1) {
            throw new NotFoundException("Student Not Found")
        }
        this.students[sIndex] = { id, ...data }
        return this.students[sIndex];
    }

    patchStudent(id: number, data: Partial<StudentType>) {
        const student = this.getStudentById(id);
        Object.assign(student, data)
        return student;
    }

    deleteStudent(id: number) {
        const sIndex = this.students.findIndex((s) => s.id === id);
        if (sIndex === -1) {
            throw new NotFoundException("Student Not Found")
        }
        const deleted = this.students.splice(sIndex, 1);
        return { message: 'Student Deleted', student: deleted[0] };
    }

}

