import { useState } from "react";
import SearchInput from "./SearchInput";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
};

export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <SearchInput value={value} onChange={setValue} />
    </div>
  );
};

export const WithValue = () => {
  const [value, setValue] = useState("Матрица");
  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <SearchInput value={value} onChange={setValue} />
    </div>
  );
};