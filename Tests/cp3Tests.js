var employeeTest = {}
const emArray = require('../testFiles/emArray')
module.exports = {
    beforeEach: browser => {
        employeeTest = browser.page.pageObjects()
    },
    after: browser => {
        browser.end()
    },
"Employee Creation and Saving Test": browser => {
    emArray.forEach((test) => {
        employeeTest.perform(() => console.log(test))
        employeeTest.navigate()
            .waitForElementVisible('@titleBar')
        employeeTest
            .setValue('@searchBar', 'New Employee')
            .api.pause(500)
        employeeTest
            .click('@newEmployeeCreate')
            .api.pause(500)
        employeeTest
            .click('@newEmployeeSelect')
            .setValue('@newEmployeeNameInput', emArray[0].addEmployeeName)
            .click('@saveBtn') 
        employeeTest
            .click('@deleteBtn')        
        })
    }
}