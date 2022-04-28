import React from "react";

type TextType = {
  textP: string;
};

export const CostAcc = ({ textP }: TextType) => (
  <>
    <p>{textP}</p>
    <b>{textP}</b>
    <br />
    <i>{textP}</i>
  </>
);
