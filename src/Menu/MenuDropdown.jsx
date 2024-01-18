import React from 'react';
import {AppContext} from './Menu.jsx';

export default function MenuDropdown({children}){
    const Context = React.useContext(AppContext);
    return (
        <div className="menu-dropdown">
            {Context.isOpen && children}
        </div>
    )
}