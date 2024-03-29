import React, { useCallback, useEffect, useRef } from 'react';
import { parse, transform, markmap } from '..';
import './mindmap.css';

type Props = {
  mdValue: string;
  className?: string;
};

export function Mindmap(props: Props) {
  const { mdValue, className } = props;
  // console.log("fg loaded?");

  const svgRef = useRef<SVGSVGElement | null>(null);

  const renderSVG = useCallback(() => {
    if (!svgRef.current || !mdValue.trim()) {
      return;
    }

    const data = transform(parse(mdValue, {links: false}), 'data');
    console.log("parsed md", parse(mdValue, {}));
    console.log("transform data", data);

    markmap(svgRef.current, data, {
      preset: 'colorful', // or default
      linkShape: 'diagonal' // or bracket
    });
  }, [mdValue]);

  useEffect(() => {
    if (!svgRef.current) {
      return;
    }

    renderSVG();
  }, [renderSVG]);

  return (
    <div className={className} style={{backgroundColor: 'white'}}>
      <svg
        id= "mindmap"
        data-testid="mindmap-svg"
        ref={svgRef}
        className="absolute w-full h-full dark:bg-gray-900"
      />
    </div>
  );
}

