import { useState } from "react";
import GenreFilter from "./GenreFilter";

export default {
  title: "Components/GenreFilter",
  component: GenreFilter,
};

export const Default = () => {
  const [genre, setGenre] = useState("Все");
  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <GenreFilter activeGenre={genre} onChange={setGenre} />
    </div>
  );
};

export const SelectedDrama = () => {
  const [genre, setGenre] = useState("драма");
  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <GenreFilter activeGenre={genre} onChange={setGenre} />
    </div>
  );
};