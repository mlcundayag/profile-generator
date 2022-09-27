const Intern = require("../lib/Intern")

const testIntern = new Intern('Intern Name', 1234, 'test.intern@email.com', 'School of Intern')

//test constructor
test('If we can can create an Intern', () => {
    expect(testIntern.name).toEqual('Intern Name');
    expect(testIntern.id).toEqual(1234);
    expect(testIntern.email).toEqual('test.intern@email.com');
    expect(testIntern.school).toEqual('School of Intern');
})

//test getName()
test('If we can get name of Intern', () => {
    expect(testIntern.getName()).toEqual('Intern Name')
})

//test getId()
test('If we can get id of Intern', () => {
    expect(testIntern.getId()).toEqual(1234)
})

//test getEmail()
test('If we can get email of Intern', () => {
    expect(testIntern.getEmail()).toEqual('test.intern@email.com')
})

//test getSchool()
test('If we can get school of the Intern', () => {
    expect(testIntern.getSchool()).toEqual('School of Intern')
})