import React from 'react';

const plus = () => {
    return(
        <div id="div1">
            <button id="btn1" onClick={() => {
                const div1 = document.getElementById("div2");
                const button = document.createElement("button");
                button.innerHTML="까꿍!";
                div1.appendChild(button);
            }}>눌러보세용</button>
            <div id="div2">

            </div>
            <style jsx>
                {`
                    #btn1 {
                        cursor: pointer;
                        background-color: black;
                        color: white;
                        padding: 20px;
                        box-shadow: 0px 0px 5px 0px gray;
                        border-radius: 10px;
                        font-weight: bold;
                    }
                    #btn1:hover {
                        padding: 30px;
                        font-size: 20px;
                        transition: 0.4s ease;
                    }
                `}
            </style>
        </div>
    )
};

export default plus;