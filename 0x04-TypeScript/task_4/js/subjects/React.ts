namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    export class React extends Subject {
        getRequirements(cTeacher: Teacher) {
            if (this.teacher.experienceTeachingReact !== undefined) {
                return "Here is the list of requirements for React";
            } else {
                return "No available teacher";
            }
        }

        getAvailableTeacher(cTeacher: Teacher) {
            if (this.teacher.experienceTeachingReact !== undefined) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }

    export const react = new React();
}