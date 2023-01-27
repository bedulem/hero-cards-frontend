import React, { useEffect, useState } from "react";
import { SearchCardForm } from "./SearchCardForm";
import { Card } from "../Card/Card";

const SearchCard = () => {
  const [search, setSearch] = useState([]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  return (
    <div className="flex flex-col items-center  h-12 mt-8 bg-principal-white-100/70 rounded-md">
      <SearchCardForm handleSearch={handleSearch} />
      <Card
        set={search.set}
        name={search.name}
        text={search.text}
        type={search.type}
        role={search.role}
        imageFront={search.imageFront}
      />
    </div>
  );
};

export default SearchCard;
