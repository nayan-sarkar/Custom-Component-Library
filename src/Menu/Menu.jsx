import React from 'react';

const AppContext = React.createContext()

export default function Menu({children}){
    const [isOpen,setIsOpen] = React.useState(true);

    function toggle(){
        setIsOpen(prev=>!prev)
    }

    return (
        <AppContext.Provider value={{toggle,isOpen}}>
            <div>
                {children}
            </div>
        </AppContext.Provider>
    )
}

export {AppContext};