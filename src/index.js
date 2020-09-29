exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        const sortComparison = (a, b) => a - b;
        const sortedArray = array.sort(sortComparison);
        return sortedArray[0];
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        const sortComparison = (a, b) => b - a;
        const sortedArray = array.sort(sortComparison);
        return sortedArray[0];
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        const summ = array.reduce((acc, value) => acc + value, 0);
        return summ / array.length;
    }
};
