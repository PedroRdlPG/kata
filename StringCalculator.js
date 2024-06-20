let StringCalculator = class {
    sum (list) {
        if (list == "") {
            return 0;
        }

        let nums = list.split(",")
        if (nums.length == 1) {
            return parseInt(nums[0])
        }else{
        return parseInt(nums[0]) + parseInt(nums[1])
        }
    }
}

module.exports = StringCalculator;

