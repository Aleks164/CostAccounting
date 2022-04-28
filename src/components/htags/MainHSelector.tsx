import React, { useState, useEffect } from "react";
import { HRenderer } from "./HRenderer";
import { HSelect } from "./HSelect";

export type ValueType = string | undefined | null;
interface MyEventTarget extends EventTarget {
  value: ValueType;
}

export const HSelector = (prop: { value: ValueType }) => {
  const [hSelect, setHSelect] = useState(prop.value);
  const handleChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setHSelect((event.target as MyEventTarget).value);
  };
  useEffect(() => {
    setHSelect(prop.value);
  }, [prop.value]);
  return (
    <>
      <HRenderer hNumber={hSelect} text={`Some text in ${hSelect} element`} />
      <HSelect handleChange={handleChange} />
    </>
  );
};
