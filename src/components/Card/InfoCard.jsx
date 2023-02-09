import React from "react";

const InfoCard = ({ set, name, text, type, role }) => {
  return (
    <>
      <div className="h-[22rem]  w-64 bg-principal-300/95 bg p-3 shadow-stone-900 shadow-lg text-principal-white-100 rounded-r-lg">
        <strong>Name: </strong>
        <p>{name}</p>
        <strong>Type: </strong>
        <p>{type}</p>
        <strong>Role: </strong>
        <p>{role}</p>
        <strong>Set: </strong>
        <p>{set}</p>
        <strong className="inline-block gap-y-2">Extra: </strong>
        <p>{text}</p>
      </div>
    </>
  );
};

export default InfoCard;
