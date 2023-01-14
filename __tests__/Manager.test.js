const { Manager } = require('../lib/classes');

describe('Manager', () => {
    describe('Initialization', () => {
        it("Should create an object with the same properties as Employee(see Employee.test.js) as well as officeNumber.", () => {
            const name = 'Brian';
            const id = 13290;
            const email = 'test2@gmail.com';
            const officeNumber = 'B12';

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
            
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual('Manager');
        });
    });
});