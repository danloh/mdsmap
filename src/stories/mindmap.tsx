import React, { useCallback, useEffect, useRef } from 'react';
import { parseMd, transform, markmap } from '..';
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

    const data = transform(parseMd(mdValue, {}));
    const mapsvg = markmap(svgRef.current, data, {
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
    <div
      className={`w-full relative select-none ${className}`}
    >
      <svg
        id= "mindmap"
        data-testid="mindmap-svg"
        ref={svgRef}
        className="absolute w-full h-full dark:bg-gray-900"
      />
    </div>
  );
}

