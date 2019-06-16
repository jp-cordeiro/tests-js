/**
 * Compara valor e tipo, semelhante ao '==='
 */

describe('toBe', function () {
    it('should test toBe', function () {
        let person = {
            name: 'John Paul',
            lastName: 'Lamb'
        }

        expect('John Paul').toBe(person.name)
        expect('Lamb').toBe(person.lastName)
        expect('Peter').not.toBe(person.name)

        expect(123).not.toBe('123')
    })
})
