"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const ED = new index_1.EDCore();
ED.auth.login("username", "password").then(() => {
    ED.grades.fetch().then(grades => {
        console.log(grades);
    });
});
//# sourceMappingURL=sample.js.map