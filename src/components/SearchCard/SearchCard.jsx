import React, { useEffect, useState } from "react";
import { SearchCardForm } from "./SearchCardForm";
import { Card } from "../Card/Card";
import { getCardById } from "../../services/cards";

const DEFAULT_FIRST_CARD = 1;

const SearchCard = () => {
  const [search, setSearch] = useState([]);

  const handleSearch = (data) => {
    console.log(data);
    setSearch(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardById(DEFAULT_FIRST_CARD);
      handleSearch(data);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col h-12 mt-8 bg-principal-white-100/70 rounded-md">
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
