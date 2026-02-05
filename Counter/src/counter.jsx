import {useState} from "react"

export default function Counter(){
    const [count , setCount] = useState(0);
    return(
        <>
        <h1>Counter App</h1>
        <div className="counter">
        <div className="main">
            
            <h2>Count : {count}</h2>
            <button className="button" onClick ={()=>setCount(count+1)}>+</button>
            <button className="button" onClick ={()=>setCount(0)}>Reset</button>
            <button className="button" onClick ={()=>setCount(count-1)}>-</button>
            
        </div>
        </div>
        </>
    );
}