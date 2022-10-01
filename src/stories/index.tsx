import * as React from "react";
import { Mindmap } from "./mindmap";

export default function Example(props) {
  const { body } = document;
  if (body)
    body.style.backgroundColor = props.dark
    ? 'black'
    : 'white';

  return (
    <div style={{ padding: "1em 2em" }}>
      <Mindmap
        mdValue={props.defaultValue}
      />
    </div>
  );
}
