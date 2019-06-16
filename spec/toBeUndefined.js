/**
 * Compara se um objeto é indefinido, ou seja, se ele é undefined
 */
describe('toBeUndefined', function () {
    it('should test toBeUndefined', function () {
        let undefinedVar = undefined

        expect(undefinedVar).toBeUndefined()
    })
})
