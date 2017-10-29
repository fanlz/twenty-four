/**
 * 一组数字的全排列
 * @param {Array} 需要全排列的数组，例: [1, 2]
 * @returns {Array} 数组全排列，例: [[1, 2], [2, 1]]
 *
 */

const permutation = (list) => {
    let result = [];
    
    list.forEach((num, index) => {
        let curIndex = index + 1;
        if (curIndex === 1) {
            result = [[num]];
        } else {
            result = result.reduce((pre, cur) => {
                let next = Array(curIndex).fill().map((_, i) => {
                    let temp = cur.slice();
                    temp.splice(i, 0, num);
                    return temp;
                });
                pre.push(...next);
                return pre;
            }, []);
        }
    });

    // 去除重复排列
    let temp = result.map(e => e.toString());
    result = [...new Set(temp)].map(e => e.split(','));
    return result;
};

module.exports = permutation;
