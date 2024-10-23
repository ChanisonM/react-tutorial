import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TableContent from "./components/TableContent";
import Card from "./components/Card";

function App() {
  const [obj, setObj] = useState([
    {
      title: "This is Title 1",
      content: "This is Content 1",
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    },
    {
      title: "This is Title 2",
      content: "This is Content 2",
      image:
        "https://images.unsplash.com/photo-1602532350069-f1e51a6420ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3BvcnR8ZW58MHx8MHx8fDA%3D",
    },
  ]);

  return (
    <div>
      <hr />
      <TableContent />
      <hr />
      {/* {obj.map((items)=> <Card image ={items.image}title = {items.title}content = {items.content} />)} */}
      <Card obj = {obj}/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
