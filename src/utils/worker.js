import expression from './expression';

onmessage = function(e) {
    if (e && e.data && e.data.numList) {
        const num = e.data.num;
        const expressions = expression(e.data.numList, num);
        postMessage({expressions, num})
    }
};