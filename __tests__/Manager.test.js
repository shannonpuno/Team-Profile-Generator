const Manager = require('../lib/Manager');

test('Should create new Manager', () => {
    const manager = new Manager('Rufus Trey', 2323, 'rufusTrey@gmail.com', '098');

    expect(manager.officeNumber).toEqual(expect.any(String));
})

test('Should get manager office number', () => {
    const manager = new Manager('Rufus Trey', 2323, 'rufusTrey@gmail.com', '098');

    expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
})

test('Should get manager role', () => {
    const manager = new Manager('Rufus Trey', 2323, 'rufusTrey@gmail.com', '098');

    expect(manager.getRole()).toBe('Manager');
});