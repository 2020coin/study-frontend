import Head from 'next/head'

const main = () => {
  return (
    <div>
      <button id="btn1" onClick={() => {
        alert("버튼을 클릭하셨습니다.");
      }}>클릭해보세요!</button>

      <style jsx>
        {`
          #btn1 {
            cursor: pointer;
            background-color: lightblue;
            box-shadow: 0px 0px 3px 0px;
            padding: 10px;
            font-weight: bold;
          }

          #btn1:hover {
            background-color: blue;
            box-shadow: 0px 0px 5px 0px gray;
            padding: 15px;
            transition: 0.4s ease;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default main;