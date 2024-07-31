namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }

    class Java extends Subject {
        getRequirements(cTeacher: Teacher) {
            if (this.teacher.experienceTeachingJava !== undefined) {
                return "Here is the list of requirements for Cpp";
            } else {
                return "No available teacher";
            }
        }

        getAvailableTeacher(cTeacher: Teacher) {
            if (this.teacher.experienceTeachingJava !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }

    export const java = new Java();
}