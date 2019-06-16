/**
 * Compara apenas o valor, semelhante ao '=='
 */

describe('toEqual', function () {
    it('should test toEqual', function () {
        let person = {
            name: 'John Paul',
            lastName: 'Lamb'
        }
        let john = {
            name: 'John Paul',
            lastName: 'Lamb'
        }
        let peter = {
            name: 'Peter',
            lastName: 'Parker'
        }

        expect(john).toEqual(person)
        expect(john).not.toEqual(peter)
    })
})
