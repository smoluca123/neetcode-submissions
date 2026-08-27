class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map()

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const find = target - num
            
            if(prevMap.has(find)){
                return [prevMap.get(find), i]
            }
        
            prevMap.set(num, i)
            
        }
        return []
    }
}
