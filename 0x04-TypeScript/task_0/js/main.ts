interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Youssef",
    lastName: "Mahmoud",
    age: 19,
    location: "Giza"
}

const student2: Student = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 38,
    location: "Inter-miami"
}

const studentsList: Array<Student> = [student1, student2]

const table = document.createElement("table")
const tHead = document.createElement("thead")
const tBody = document.createElement("tbody")
const headerRow = document.createElement("tr")

const titles = ["First Name", "Last Name", "Age", "Location"]

titles.forEach(title => {
    const th = document.createElement("th")
    th.textContent = title
    headerRow.appendChild(th)
});

tHead.appendChild(headerRow)
table.appendChild(tHead)

studentsList.forEach(student => {
    const tr = document.createElement("tr")
    const firstNameTd = document.createElement("td")
    firstNameTd.textContent = student.firstName
    tr.appendChild(firstNameTd)

    const lastNameTd = document.createElement("td")
    lastNameTd.textContent = student.lastName
    tr.appendChild(lastNameTd)

    const ageTd = document.createElement("td")
    ageTd.textContent = student.age.toString()
    tr.appendChild(ageTd)

    const locationTd = document.createElement("td")
    locationTd.textContent = student.location
    tr.appendChild(locationTd)

    tBody.appendChild(tr)
});

table.appendChild(tBody)

document.body.appendChild(table)
