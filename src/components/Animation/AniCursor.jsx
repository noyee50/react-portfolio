import React from "react";
import AnimatedCursor from "react-animated-cursor";
function AniCursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="0,65,125"
      outerAlpha={0.2}
      innerScale={1.5}
      outerStyle={{ border: "3px solid #fff" }}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default AniCursor;
