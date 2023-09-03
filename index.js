module.exports = {
    login: require("./src/auth").login,
    fetchTimetable: require("./src/fetch/getTimetable"),
    fetchSchoolife: require("./src/fetch/getSchoollife"),
    fetchGrades: require("./src/fetch/getGrades"),
    fetchHomeworks: require("./src/fetch/getHomeworkList"),
    fetchHomeworksByDay: require("./src/fetch/getHomeworksByDay"),
    setHomeworkStatus: require("./src/fetch/setHomeworkStatus")
}