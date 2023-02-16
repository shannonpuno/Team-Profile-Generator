const Engineer = require('../lib/Engineer');

test('Should create new engineer', () => {
    const engineer = new Engineer('Gary PoBoy', 1234, 'garyBoy@gmail.com', 'garyBoy12');

    expect(engineer.github).toEqual(expect.any(String));
})

test('Should get engineer github account', () => {
    const engineer = new Engineer('Gary PoBoy', 1234, 'garyBoy@gmail.com', 'garyBoy12');

    expect(engineer.getGithub()).toBe(engineer.github);
})

test('Should get engineer role', () => {
    const engineer = new Engineer('Gary PoBoy', 1234, 'garyBoy@gmail.com', 'garyBoy12');

    expect(engineer.getRole()).toBe('Engineer');
});