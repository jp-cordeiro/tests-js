/**
 * Compara se um objeto é definido, ou seja, se ele tem algum valor atribuido
 */
describe('toBeDefined', function () {
    it('should test toBeDefined', function () {
        let nullVar = null
        let string = 'whatever'
        let anyObj = {name:'John'}

        expect(nullVar).toBeDefined()
        expect(string).toBeDefined()
        expect(anyObj).toBeDefined()
    })
})
