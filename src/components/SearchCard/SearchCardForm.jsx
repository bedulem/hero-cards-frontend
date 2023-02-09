import { useState } from "react";
import { getCardById, getCardByName } from "../../services/cards";
import Button from "../Button/Button";

export const SearchCardForm = ({ handleSearch }) => {
  const [valueInput, setValueInput] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setValueInput(value);
  }

  async function onSubmit(e) {
    let result;
    e.preventDefault();
    const value = e.target[0].value;

    if (isNaN(value)) {
      result = await getCardByName(valueInput);
    } else {
      result =
        value <= 0 || value >= 600
          ? await getCardById(1)
          : await getCardById(Number(valueInput));
    }
    handleSearch(result);
    setValueInput("");
  }

  return (
    <div className="w-full h-12">
      <form
        className="flex h-12 justify-around items-center"
        onSubmit={onSubmit}
      >
        <input
          className="bg-principal-white-100/50 outline-none focus:border-transparent placeholder:text-sm placeholder:text-principal-white-100/50 caret-secondary-brown-100 appearance-none w-8/12 h-4/6 p-1 text-secondary-brown-100 transition hover:bg-gradient-to-r- hover:from-secondary-brown-400 hover:to-secondary-brown-400 hover:shadow-secondary-brown-400"
          type="text"
          name=""
          id=""
          onChange={handleChange}
          value={valueInput}
        />
        <Button type="submit" value="Search" />
      </form>
    </div>
  );
};
