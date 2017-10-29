import test from 'ava';
import expression from '../../src/utils/expression';

test('is a success with a mount and a child expectation', t => {
    
    // 
    t.is(expression([1], 1).toString(), [1].toString());
    t.is(expression([1, 2], 1).length, 1);
    t.is(expression([1, 2, 3], 10).length, 0);
});