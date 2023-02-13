import React, { useEffect, useState } from "react";
import { SearchCardForm } from "./SearchCardForm";
import { Card } from "../Card/Card";
import { getCardById } from "../../services/cards";
import Carousel from "../Carousel/Carousel";

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
    <div className="flex flex-col items-center">
      <div className="flex  mt-8 w-[500px] bg-principal-white-100/70 rounded-md">
        <SearchCardForm handleSearch={handleSearch} />
      </div>
      {console.log(Array.isArray(search))}
      {Array.isArray(search) ? (
        <Carousel data={search}></Carousel>
      ) : (
        // <div className="grid grid-cols-4  justify-around">
        //   {search.map((el) => (
        //     <Card
        //       key={el.id}
        //       set={el.set}
        //       name={el.name}
        //       text={el.text}
        //       type={el.type}
        //       role={el.role}
        //       imageFront={el.imageFront}
        //     />
        //   ))}
        // </div>
        <Card
          set={search.set}
          name={search.name}
          text={search.text}
          type={search.type}
          role={search.role}
          imageFront={search.imageFront}
        />
      )}
    </div>
  );
};

export default SearchCard;
