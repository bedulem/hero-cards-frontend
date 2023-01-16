import { getCardById } from "../../services/cards";

const { set, name, text, type, role, imageFront } = await getCardById(30);

export function Card() {
  return (
    <section className="flex flex-row justify-center items-center m-10 ">
      <div>
        <img src={imageFront} alt="" className="rounded-2xl max-h-96" />
      </div>
      <div className="h-80 w-64 bg-[#2e617d] p-3">
        <strong>Name: </strong>
        <p>{name}</p>
        <strong>Type: </strong>
        <p>{type}</p>
        <strong>Role: </strong>
        <p>{role}</p>
        <strong>Set: </strong>
        <p>{set}</p>
        <strong>Extra: </strong>
        <p>{text}</p>
      </div>
    </section>
  );
}
