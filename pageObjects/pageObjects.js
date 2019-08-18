var employeeManagerCustomCommands = {
    employeeInfoEntry : function(createOne){
        if(createOne.addEmployeeName){
            this.setValue('@newEmployeeNameInput', createOne.addEmployeeName)
        }
        if(createOne.addEmployeePhone){
            this.setValue('@newEmployeePhoneInput', createOne.addEmployeePhone)
        }
        if(createOne.addEmployeeEmail){
            this.setValue('@newEmployeeEmailInput', createOne.addEmployeeEmail)
        }
        if(createOne.addEmployeeTitle){
            this.setValue('@newEmployeeTitleInput', createOne.addEmployeeTitle)
        }
        this.click('@saveBtn')
    return this
    }
}
module.exports = {
    url: ('https://devmountain-qa.github.io/employee-manager-v2/build/index.html'),
    commands: [employeeManagerCustomCommands],
    elements: {
        //INPUTS
        newEmployeeSelect: '[text()="New Employee"]',
        newEmployeeNameInput: '[name="nameEntry"]',
        newEmployeePhoneInput: '[name="phoneEntry"]',
        newEmployeeEmailInput: '[name="emailEntry"]',
        newEmployeeTitleInput: '[name="titleEntry"]',
        searchBar: '[name="searchBox"]',
        // BUTTONS
        newEmployeeCreate: '[name="addEmployee"]',
        saveBtn: '[name="save"]',
        cancelBtn: '[name="cancel"]',
        deleteBtn: '[name="delete"]',
        // OTHER
        titleBar: '[class="titleBar"]',
        },
        newEmployeeCreate: {
        selector: '//ul/li[@name="addEmployee"]',
        locateStrategy: 'xpath'
        },
        newEmployeeSelect: {
        selector: '//ul/li[text()="New Employee"]',
        locateStrategy: 'xpath'
        },
        newEmployeeNameInput: {
        selector: ('//div/input[@name="nameEntry"]'),
        locateStrategy: 'xpath'
        },
        newEmployeePhoneInput: {
            selector: '//div/input[@name="phoneEntry"]',
            locateStrategy: 'xpath'
        },
        newEmployeeEmailInput: {
            selector: '//div/input[@name="emailEntry"]',
            locateStrategy: 'xpath'
        },
        newEmployeeTitleInput: {
            selector: '//div/input[@name="titleEntry"]',
            locateStrategy: 'xpath'
        },
        saveBtn: {
            selector: '//div/button[@name="save"]',
            locateStrategy: 'xpath'
        },
        cancelBtn: {
            selector: '//div/button[@name="cancel"]',
            locateStrategy: 'xpath'
        },
        deleteBtn: {
            selector: '//div/button[@name="delete"]',
            locateStrategy: 'xpath'
        },
        titleBar: {
            selector: '//div[@class="titleBar"]',
            locateStrategy: 'xpath'
        },
        searchBar: {
            selector: '//li/input[@name="searchBox"]'
        },
}