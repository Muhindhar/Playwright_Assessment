const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports/html-report",

  metadata: {
    browser: {
      name: "chromium",
      version: "latest",
    },
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});

console.log("HTML report generated");