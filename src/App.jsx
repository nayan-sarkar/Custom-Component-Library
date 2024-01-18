import React from 'react';
import './style.css';
import Menu from './Menu/index';


function App(){
    const items = ["grapes","apples","bananas","jackFruit","ballons"];
    const title = "Bag";
    return (
        <>
                <Menu>
                    <Menu.Title>{title}</Menu.Title>
                    <Menu.Dropdown>
                        {items.map((item,index)=>{
                            return <Menu.Item key={index}>{item}</Menu.Item>
                        })}
                    </Menu.Dropdown>
                </Menu>
            
      </>) 
}

export default App;