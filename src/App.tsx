import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListProd, { IProps, ListProdFC } from './ListProd';

function App() {
  const propShop1:IProps={caption:"netiv Hachesed",id:123};
  const propShop2:IProps={caption:"shefa zol",id:148};
  const propShop3:IProps={caption:"bar col",id:165};


  return (
    <div className="App">
      <h1>Shop List</h1>
      <ListProd {...propShop1}></ListProd>
      <ListProd {...propShop2}></ListProd>
      <ListProdFC {...propShop3}></ListProdFC>
      <ListProdFC caption={''} id={0}></ListProdFC>
      <ListProdFC caption={'new to commit'} id={1}></ListProdFC>

    </div>
  );
}

export default App;
