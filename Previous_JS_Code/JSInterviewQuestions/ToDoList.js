import { useState } from "react";
function InputData() {
  const [data, setData] = useState("");
  const [dataList, setDataList] = useState([]);
  function changeHandler(e) {
    setData(e.target.value);
  }
  function clickHandler() {
    setDataList([...dataList, data]);
    setData("");
  }
  return (
    <>
      <input type="text" value={data} onChange={changeHandler} />
      <button onClick={clickHandler}>Submit</button>
      <ul>
        {dataList ? (
          dataList.map((ele, index) => <li key={index}>{ele}</li>)
        ) : (
          <p>No Data is there!!</p>
        )}
      </ul>
    </>
  );
}
export default InputData;
