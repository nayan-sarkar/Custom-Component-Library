import React from 'react';
import Button from './../Button';
import {AppContext} from './Menu.jsx';

export default function MenuTitle({children,...props}){
    const toggle = React.useContext(AppContext).toggle;
    return (
        <Button className="menu-title" {...props} onClick={toggle}>{children}</Button>
    )
}