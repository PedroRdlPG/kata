let StringCalculator = class {
    sum (list) {
        if (list == "") {
            return 0;
        }

        let nums = list.split(",")
        return parseInt(nums[0]) + parseInt(nums[1])
       
    }
}

module.exports = StringCalculator;

