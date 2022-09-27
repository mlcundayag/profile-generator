const Employee = require("../lib/Employee");

const testEmployee = new Employee('Employee Name', 1234, 'test.employee@email.com')

//test constructor
test('If we can can create an Employee', () => {
    expect(testEmployee.name).toEqual('Employee Name');
    expect(testEmployee.id).toEqual(1234);
    expect(testEmployee.email).toEqual('test.employee@email.com')
})

//test getName()
test('If we can get name of employee', () => {
    expect(testEmployee.getName()).toEqual('Employee Name')
})

//test getId()
test('If we can get id of employee', () => {
    expect(testEmployee.getId()).toEqual(1234)
})

//test getEmail()
test('If we can get email of employee', () => {
    expect(testEmployee.getEmail()).toEqual('test.employee@email.com')
})

