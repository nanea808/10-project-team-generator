const { Employee } = require('../lib/classes');

describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create an object with name, id, and email properties. As well as getName(), getId(), getEmail(), and getRole().", () => {
            const name = 'Coolean';
            const id = '01';
            const email = 'test@gmail.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual('Employee');
        });
    });
});