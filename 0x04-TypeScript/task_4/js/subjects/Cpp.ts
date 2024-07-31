namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number
    }

    export class Cpp extends Subject {

        getRequirements(cTeacher: Teacher) {
            if (this.teacher.experienceTeachingC !== undefined) {
                return "Here is the list of requirements for Cpp";
            } else {
                return "No available teacher";
            }
        }

        getAvailableTeacher(cTeacher: Teacher) {
            if (this.teacher.experienceTeachingC !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }

    export const cpp = new Cpp();
    export const cTeacher: Teacher = {firstName: "Barry", lastName: "Alen", experienceTeachingC: 10}
}