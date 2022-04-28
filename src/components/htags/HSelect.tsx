import React from "react";

type HSelectType = {
  handleChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export function HSelect(props: HSelectType) {
  return (
    <>
      <label htmlFor="h-select">Выберите тег "h" </label>
      <select
        onChange={
          props.handleChange as unknown as React.ChangeEventHandler<HTMLSelectElement>
        }
        name="h-source"
        data-testid="h-select"
        defaultValue={"default"}
      >
        <option value={"default"}>h1</option>
        <option value="h2">h2</option>
        <option value="h3">h3</option>
        <option value="h4">h4</option>
        <option value="h5">h5</option>
        <option value="h6">h6</option>
      </select>
    </>
  );
}
