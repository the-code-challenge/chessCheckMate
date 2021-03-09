const challengeFunction = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1: when kingWhite="A1", rookBlack= "A5", bishopBlack="D4", knightBlack="D2" should return "jaque mate"', () => {

        let result = challengeFunction("A1","A5","D4","D2")
        let expected = "jaque mate"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2: when kingWhite="D1", rookBlack= "H2", bishopBlack="E3", knightBlack="C3" should return "jaque"', () => {

        let result = challengeFunction("D1","H2","E3","C3")
        let expected = "jaque"

        assert.strictEqual(result,expected)
    })

})
