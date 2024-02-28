const fs = require("fs");

function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                const lines = data
                    .split("\n")
                    .filter((line) => line.trim() !== "");
                const fields = {};
                for (const line of lines) {
                    const [firstName, , , field] = line.split(",");
                    if (field === "field") {
                        continue;
                    }
                    if (!fields[field]) {
                        fields[field] = [];
                    }
                    fields[field].push(firstName);
                }
                resolve(fields);
            }
        });
    });
}

module.exports = { readDatabase };
