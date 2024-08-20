import ListGroup from "./components/ListGroup";
import Navbar from "./components/Nav";
import { useState, useEffect } from "react";

function App() {
  let items = ["New York", "San Fransisco", "New Delhi", "Paris"];
  const data = ([Data, setData] = useState("hello"));
  useEffect(() => {}, []);
  return (
    <>
      <div></div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <ListGroup
          items={items}
          title="Cities"
          SelectedItem={(item) => console.log({ item })}
        />
      </div>
    </>
  );
}
export default App;
