import React,{useState} from "react";
import './Styling.css';
import cx from 'classnames'
export const Task2=({rounded=false})=>
{
    const [result,setResult]=useState("");
    const handleClick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const del=()=>
    {
        setResult(result.slice(0,-1));
    }
    const calculate=()=>{
        try{
            setResult(eval(result).toString());
        } catch(err){
            setResult("Error");
        }
    }

    //switch Component

    const sliderCX=cx('slider',{'rounded':rounded})
    



    return(
        < >
        <div id="fill">
            <div style={{marginLeft:10}}>
                <label className="switch">
                    <input style={{marginTop:100,marginRight:10}} onClick={colorChange} type="checkbox"/>
                    <span className={sliderCX}/>
                </label>
                <input type="text" id="i2" value={result}/>
            </div>
            <div className="keypad" id="i1">
                <button name="7"  onClick={handleClick} >7</button>
                <button name="8" onClick={handleClick} >8</button>
                <button name="9"  onClick={handleClick} >9</button>
                <button id="del"  onClick={del} >⌫</button>
                <button name="4"  onClick={handleClick} >4</button>
                <button name="5"  onClick={handleClick} >5</button>
                <button name="6"  onClick={handleClick} >6</button>
                <button name="/"  onClick={handleClick} >&divide;</button>
                <button name="1"  onClick={handleClick} >1</button>
                <button name="2"  onClick={handleClick} >2</button>
                <button name="3"  onClick={handleClick} >3</button>
                <button name="*"  onClick={handleClick} >&times;</button>
                <button name="0"  onClick={handleClick} >0</button>
                <button name="."  onClick={handleClick} >.</button>
                <button  name="=" onClick={calculate}  >=</button>
                <button  name="-" onClick={handleClick}  >-</button>
                <button name="+" id="result" onClick={handleClick}>+</button>
            </div>
        </div>
        </>
    )
}
var c=1;
const colorChange=()=>
{
    if(c==1)
    {
        document.getElementById("i1").style.backgroundColor="teal";
        document.getElementById("i2").style.backgroundColor="lavender";
        document.getElementById("i2").style.color="black";
        c=0
    }
    else
    {
        document.getElementById("i1").style.backgroundColor="black";
        document.getElementById("i2").style.backgroundColor="#033063";
        document.getElementById("i2").style.color="white";
        c=1;
    }
}