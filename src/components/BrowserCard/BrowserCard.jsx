import { useState } from "react";
import { getCardById } from "../../services/cards";

export const BrowserCard = () => {
  const [valueInput, setValueInput] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setValueInput(value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    // if (value <= 0 || value >= 10000) {
    //   return;
    // }
    const result = await getCardById(Number(valueInput));

    console.log(result);
  }

  return (
    <div className="flex items-center w-3/5 h-12 mt-8 bg-principal-white-100/70 rounded-md">
      <form className="w-full flex justify-around" onSubmit={onSubmit}>
        <input
          className="bg-principal-white-100/20 outline-none focus:border-transparent placeholder:text-sm placeholder:text-principal-white-100/50 caret-neutral-300 appearance-none w-8/12"
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
