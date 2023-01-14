const { Engineer } = require('../lib/classes');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("Should create an object with the same properties as Employee(see Employee.test.js) as well as github.", () => {
            const name = 'Ungus';
            const id = 11234;
            const email = 'test3@gmail.com';
            const github = 'https://github.com/fakeGitHubAcc';

            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
            
            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual('Engineer');
        });
    });
});