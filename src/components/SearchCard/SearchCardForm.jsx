import { useState } from "react";
import { getCardById } from "../../services/cards";

export const SearchCardForm = ({ handleSearch }) => {
  const [valueInput, setValueInput] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setValueInput(value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (e.target.value <= 0 || e.target.value >= 10000) {
      return await getCardById(1);
    }
    const result = await getCardById(Number(valueInput));

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
          type="number"
          name=""
          id=""
          onChange={handleChange}
          value={valueInput}
        />
        <input
          className="px-8 py-1 text-principal-white-100 bg-gradient-to-r from-secondary-brown-300 to-secondary-brown-100 shadow-md shadow-secondary-brown-200/30 transition hover:bg-gradient-to-r- hover:from-secondary-brown-400 hover:to-secondary-brown-400 hover:shadow-secondary-brown-200/50 border-b-[1px] border-secondary-brown-100"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};
