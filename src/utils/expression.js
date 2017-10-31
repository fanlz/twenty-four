/**
 * 算法参考：http://wiki.jikexueyuan.com/project/scala-twentyfour-game/algorithm.html
 * 求任意个正整数组成的数组，利用加，减，乘，除，括号求得值为n的运算表达式
 * 注意加法，乘法需要去重，(( a + b ) * c) / d = 24 和 (( b + a) * c ) / d = 24 视为同一表达式
 * 
 * @param {Array} 任意个正整数组成的数组，例: [3, 3, 6, 6]
 * @param {Number} 正整数值，例：24
 * @returns {Array} 所有合理运算表达式的数组，例：['((6/3)+6)*3']
 *
 * todo: 去重
 */

export default function solve(list, total=24) {
    // 记录开始时间戳
    const start = Date.now();
    
    // 储存所有结果为24的递归运算过程
    const entries = [];

    // 防止有小数运算的精度问题
    const isZero = num => Math.abs(num) < 0.0001;

    // 穷举计算所有表达式
    const calculate = function(arr) {
        if (arr.length === 1) {
            if (isZero(arr[0][0] - total)) {
                entries.push(arr[0]);
            }
        } else {
            arr.forEach((x, i) => {
                let temp = arr.slice();
                temp.splice(i, 1);

                temp.forEach((y, j) => {
                    let rest = temp.slice()
                    rest.splice(j, 1);

                    calculate([[x[0] + y[0], x, y, '+'], ...rest]);
                    calculate([[x[0] - y[0], x, y, '-'], ...rest]);
                    calculate([[x[0] * y[0], x, y, '*'], ...rest]);
                    calculate([[x[0] / y[0], x, y, '/'], ...rest]);
                });
            });
        }
    };
    calculate(list.map(e => [e]));
    console.log(entries)
    debugger
    // 将运算过程解析为运算表达式
    const analysis = function(arr) {
        if (arr[0] && arr[0].length === 1) {
            return arr[0];
        }
        const extract = function([v, v1, v2, op]) {
            if (v1) {
                if ((op === '*' || op === '+') && v2[0] > v1[0]) {
                    [v1, v2] = [v2, v1];
                }
                const exp = `${extract(v1)}${op}${extract(v2)}`;
                return v === total ? exp : `(${exp})`;
            } else {
                return v;
            }
        };
        console.log(arr);
        debugger
        let temp = [];
        arr.forEach(e => {
            let exp = extract(e);
            if(temp.indexOf(exp) === -1) {
                temp.push(exp);
            }
        });
        return temp;
    };
    const result = analysis(entries);
    // 计算时间差
    console.log(Date.now() - start, 'ms');
    return result;
}
