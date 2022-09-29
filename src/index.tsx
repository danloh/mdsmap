
export { parse as parseMd, transform } from "./mindmap/parser";
export { default as markmap }  from "./mindmap/view";
export { Mindmap } from "./mindmap/mindmap";

export type Props = {
  /** An optional identifier */
  id?: string;
  /** editor content */
  value?: string;
  /** init editor content */
  defaultValue?: string;
  /** dark moed? */
  dark?: boolean;
  /**additional class */
  className?: string;
  /** customize style */
  style?: React.CSSProperties;
};
