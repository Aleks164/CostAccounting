import React from "react";

type TextType = {
  textP: string;
};

export const Login = ({ textP }: TextType) => (
  <>
    <p>{textP}</p>
    <b>{textP}</b>
    <br />
    <i>{textP}</i>
  </>
);
