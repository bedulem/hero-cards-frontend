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
    <div className="flex flex-row justify-around items-center w-3/5 h-12 mt-8 bg-principal-white-100/70 rounded-md">
      <form className="w-96" onSubmit={onSubmit}>
        <input
          className="mr-10 bg-principal-white-100/20 outline-none focus:border-transparent placeholder:text-sm placeholder:text-principal-white-100/50 caret-neutral-300 appearance-none"
          type="number"
          name=""
          id=""
          onChange={handleChange}
          value={valueInput}
        />
        <input
          className="px-8 py-1 gap-x-4  text-principal-white-100 bg-secondary-brown-200 shadow-md shadow-secondary-brown-200/20 transition hover:bg-secondary-brown-300 hover:shadow-secondary-brown-200/50"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};
