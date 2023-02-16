const Employee= require('../lib/Employee');

//Creates employee parent class 
test('Should create a new employee', () => {
    const employee = new Employee ('Wilma Doe', 808080, 'wilmadoe@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
})

test('Tests employee name', () => {
    const employee = new Employee('Wilma Doe', 808080, 'wilmadoe@email.com');
    expect(employee.getName()).toBe(employee.name);
});

test('Tests employee id', () => {
    const employee = new Employee('Wilma Doe', 808080, 'wilmadoe@email.com');

    expect(employee.getId()).toBe(employee.id);
});

test('Tests employee email', () => {
    const employee = new Employee('Wilma Doe', 808080, 'wilmadoe@email.com');

    expect(employee.getEmail()).toBe(employee.email);
});

test('Tests employee role', () => {
    const employee = new Employee('Wilma Doe', 808080, 'wilmadoe@email.com');

    expect(employee.getRole()).toBe('Employee');
});

