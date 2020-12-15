import React from "react";
import 'katex/dist/katex.min.css';
import matrixElement from "../AntonioElement/index";
import matrixElement1 from "../AntonioElement/index copy 1";
import matrixElement2 from "../AntonioElement/index copy 2";
import matrixElement3 from "../AntonioElement/index copy 3";


import "./index.css";


const dom = (props) => [
  {
  type: "math",
  subtype: "matrix2x2",
  children: [matrixElement.slateDOM(), matrixElement1.slateDOM(), matrixElement2.slateDOM(), matrixElement3.slateDOM(),],
},
  {
    children: [
      {        
        text: "",
      },
      {        
        text: "",
      },
    ],
  }
];


const Element = (attributes, children) => {   

  return (
    <span {...attributes}>     
      <span className = "inline-2"  rules="">      
      {children}
      </span>
    </span>
    
  );
};

const icon = (attributes, children) => {
  var Latex = require('react-latex');
  return (
    <span {...attributes}>
      <span>  <Latex displayMode={false}>{`$$
    \\begin{array}{cc|c}
        \u2b1a & \u2b1a \\\\
        \u2b1a & \u2b1a \\\\
    \\end{array}
  $$`}</Latex>
  </span>
      {children}
    </span>
  );};
  

export default { slateDOM: dom, MathElement: Element, Icon: icon };
