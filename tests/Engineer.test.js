const Engineer = require("../lib/Engineer")

const testEngineer = new Engineer('Engineer Name', 1234, 'test.engineer@email.com', 'testEngineer')

//test constructor
test('If we can can create an Engineer', () => {
    expect(testEngineer.name).toEqual('Engineer Name');
    expect(testEngineer.id).toEqual(1234);
    expect(testEngineer.email).toEqual('test.engineer@email.com');
    expect(testEngineer.gitHub).toEqual('testEngineer');
})

//test getName()
test('If we can get name of Engineer', () => {
    expect(testEngineer.getName()).toEqual('Engineer Name')
})

//test getId()
test('If we can get id of Engineer', () => {
    expect(testEngineer.getId()).toEqual(1234)
})

//test getEmail()
test('If we can get email of Engineer', () => {
    expect(testEngineer.getEmail()).toEqual('test.engineer@email.com')
})

//test getGitHub()
test('If we can get gitHub of the Engineer', () => {
    expect(testEngineer.getGitHub()).toEqual('testEngineer')
})

//test getRole()
test('If we can get the role of the Engineer', () => {
    expect(testEngineer.getRole()).toEqual('Engineer')
})