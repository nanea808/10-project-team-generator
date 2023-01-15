const { Intern } = require('../lib/classes');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("Should create an object with the same properties as Employee(see Employee.test.js) as well as school.", () => {
            const name = 'Bob';
            const id = 80085;
            const email = 'test4@gmail.com';
            const school = 'UofO';


            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
            
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual('Intern');
        });
    });
});