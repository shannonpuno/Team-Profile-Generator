const Intern = require('../lib/Intern');

test('Should create new Intern', () => {
    const intern = new Intern('Harry Granger', 4545, 'harryGranger@gmail.com', 'Hogwartz');

    expect(intern.school).toEqual(expect.any(String));
})

test('Should get intern school', () => {
    const intern = new Intern('Harry Granger', 4545, 'harryGranger@gmail.com', 'Hogwartz');

    expect(intern.getSchool()).toBe(intern.school);
})

test('Should get intern role', () => {
    const intern = new Intern('Harry Granger', 4545, 'harryGranger@gmail.com', 'Hogwartz');

    expect(intern.getRole()).toBe('Intern');
});