let StringCalculator = class {
    sum (list) {
        if (list == "") {
            return 0;
        }
        return parseInt(list[0]);
    }
}

module.exports = StringCalculator;

