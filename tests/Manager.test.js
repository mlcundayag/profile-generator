const Manager = require("../lib/Manager")

const testManager = new Manager('Manager Name', 1234, 'test.manager@email.com', 6789)

//test constructor
test('If we can can create a Manager', () => {
    expect(testManager.name).toEqual('Manager Name');
    expect(testManager.id).toEqual(1234);
    expect(testManager.email).toEqual('test.manager@email.com');
    expect(testManager.officeNumber).toEqual(6789);
})

//test getName()
test('If we can get name of Manager', () => {
    expect(testManager.getName()).toEqual('Manager Name')
})

//test getId()
test('If we can get id of Manager', () => {
    expect(testManager.getId()).toEqual(1234)
})

//test getEmail()
test('If we can get email of Manager', () => {
    expect(testManager.getEmail()).toEqual('test.manager@email.com')
})

//test getOfficeNumber()
test('If we can get office number of the manager', () => {
    expect(testManager.getOfficeNumber()).toEqual(6789)
})