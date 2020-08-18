import React, {useState, useEffect} from "react";
import './Startblock.css';
const classNames = require('classnames');

function Startblock() {
  const [fillText, setFillText] = useState('is trying');

  return (
    <>
      <h1 className="startblock-header">
        <span className="startblock-title">KEISUKE</span>
        <span className="startblock-title">ISOBE</span>
      </h1>
      <canvas>
      </canvas>
    </>
  )
}

export default Startblock;