/**
 * Realiza comparação utilizando Regex
 */
describe('toMatch',function () {
    it('should test toMatch',function () {
        var string = '[A] [A] [B] [C]'

        expect(string).toMatch(/\[[AZ\]]/g)
    })
})
