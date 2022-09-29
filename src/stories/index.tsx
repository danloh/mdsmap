import * as React from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { Mindmap } from "..";

export default function Example(props) {
  const { body } = document;
  if (body)
    body.style.backgroundColor = props.dark
      ? darkTheme.background
      : lightTheme.background;

  return (
    <div style={{ padding: "1em 2em" }}>
      <Mindmap
        mdValue={props.defaultValue}
      />
    </div>
  );
}
