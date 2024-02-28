const { readDatabase } = require("../utils");

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const fields = await readDatabase(req.databasePath);
            res.status(200).send("This is the list of our students\n");
            for (const [field, students] of Object.entries(fields)) {
                res.write(
                    `Number of students in ${field}: ${
                        students.length
                    }. List: ${students.join(", ")}\n`
                );
            }
            res.end();
        } catch (error) {
            res.status(500).send("Cannot load the database\n");
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major.toUpperCase();
        if (major !== "CS" && major !== "SWE") {
            res.status(500).send("Major parameter must be CS or SWE\n");
            return;
        }

        try {
            const fields = await readDatabase(req.databasePath);
            const studentsInMajor = fields[major] || [];
            res.status(200).send(`List: ${studentsInMajor.join(", ")}\n`);
        } catch (error) {
            res.status(500).send("Cannot load the database\n");
        }
    }
}

module.exports = StudentsController;
