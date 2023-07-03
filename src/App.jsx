import Logo from "./components/Logo"
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList item={items} />
      <Stats />
    </>
  );
}

export default App