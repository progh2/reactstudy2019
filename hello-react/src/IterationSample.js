import React from 'react';

const IterationSample = () => {

    var numbers = [1, 2, 3, 4, 5];
    var processed = numbers.map(function (num) {
        return num * num;
    });
    console.log(processed);

    const numbers2 = [1, 2, 3, 4, 5];
    const result = numbers2.map(num => num * num);
    console.log(result);

    return (
        <ul>
            <li>눈사람</li>
            <li>얼음</li>
            <li>눈</li>
            <li>바람</li>
        </ul>
    );
};

export default IterationSample;
