function twoSum(nums: number[], target: number): number[] {
    let result = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            const sum = nums[i] + nums[j];
            if(target === sum){
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
};