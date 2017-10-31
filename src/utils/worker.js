import expression from './expression';

onmessage = function(e) {
    if (e && e.data && e.data.tempList) {
        const num = e.data.num;
        const expressions = expression(e.data.tempList, num);
        postMessage({expressions, num})
    }
};
