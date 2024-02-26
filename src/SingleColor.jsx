import { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({index,rgb,weight}) => {
  const[alert,setAlert] = useState(false)
  const hexValue = rgbToHex(...rgb);

  useEffect(()=>{
    const timeInterval = setTimeout(()=>{
      setAlert(false);
    },2000)

    return () => clearInterval(timeInterval);
  },[alert])

  const copyColor = () =>{
    navigator.clipboard.writeText(hexValue);
    setAlert(true);
  }

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgb})` }} 
      onClick={copyColor}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}
export default SingleColor;