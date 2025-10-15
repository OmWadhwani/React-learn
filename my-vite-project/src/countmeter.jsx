import { useState } from "react";
export default function Counter(){
    const[count,setcount] = useState(0);
    function handleClick(){
        setcount(count+1)
    }
    return <>
    <button onClick={handleClick}>Click {count} me </button></>
}