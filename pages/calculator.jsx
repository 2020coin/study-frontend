import React from 'react';

const calculator = () => {

    return(
        <div>
            숫자 1 : <input type="text" id="input1"></input> <br></br>
            숫자 2 : <input type="text" id="input2"></input> <br></br>
            <button id="plus" onClick={() => {
                const input1 = Number(document.getElementById('input1').value);
                const input2 = Number(document.getElementById('input2').value);
                alert(input1+input2);
            }}>더하기!</button>
            &nbsp;<button id="minus" onClick={() => {
                 const input1 = Number(document.getElementById('input1').value);
                 const input2 = Number(document.getElementById('input2').value);
                alert(input1-input2);
            }}>빼기!</button>
        </div>
    )
};

export default calculator;