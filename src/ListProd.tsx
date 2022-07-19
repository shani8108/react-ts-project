import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export interface IProps{
    caption:string;
    id:number;
}

export default function ListProd(props:IProps) {

    const[getProd,setProd]=useState<string>("");
    const[getArr,setArr]=useState<string[]>([]);

  return (
    <div className="App">
    <h1>shopping : {props.caption} ,number: {props.id} !!!</h1>
      <input placeholder='enter new product' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setProd(e.target.value);
        }}/>
      <button onClick={(x)=>{
        let Arr:string[]=[...getArr,getProd];
        setArr(Arr);
      }}>ADD</button>
      {getArr.map((x,index)=>{
        return (<p>{index+1}.{x}</p>)
      })}
    </div>
  );
}

export const ListProdFC:React.FC<IProps>=(props)=> {

    const[getProd,setProd]=useState<string>("");
    const[getArr,setArr]=useState<string[]>([]);

  return (
    <div className="App">
    <h1>shopping : {props.caption} ,number: {props.id} !!!</h1>
      <input placeholder='enter new product' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setProd(e.target.value);
        }}/>
      <button onClick={(x)=>{
        let Arr:string[]=[...getArr,getProd];
        setArr(Arr);
      }}>ADD</button>
      {getArr.map((x,index)=>{
        return (<p>{index+1}.{x}</p>)
      })}
    </div>
  );
}
