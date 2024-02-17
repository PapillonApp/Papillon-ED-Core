const {EDCore} = require("../index");

const ED = new EDCore()

await ED.auth.login('username', 'password')

// Retrieve grades
const grades = ED.grades.fetch()
console.log(grades)
