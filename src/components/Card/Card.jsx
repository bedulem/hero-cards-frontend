import InfoCard from "./InfoCard";

export function Card({ set, name, text, type, role, imageFront }) {
  return (
    <section className="flex flex-row justify-center items-center m-10 ">
      {imageFront ? (
        <>
          <div>
            <img src={imageFront} alt="" className="rounded-2xl max-h-96" />
          </div>
          <InfoCard set={set} name={name} text={text} type={type} role={role} />
        </>
      ) : (
        set
      )}
    </section>
  );
}
