class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(const str of strs){
            result += `${str.length}#${str}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0

        while(i < str.length) {
            let j = str.indexOf('#', i)

            const length = parseInt(str.substring(i, j), 10)

            const world = str.substring(j + 1, j + 1 + length)
            result.push(world)

            i = j + 1 + length
        }

        return result
    }
}
