import React, {Children, createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children}) => {
    const [activeMenu, setActiveMenu] =useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});
    }

    return (
        <StateContext.Provider value={{
            activeMenu: activeMenu,
            setActiveMenu: setActiveMenu,
            isClicked: isClicked,
            setIsClicked: setIsClicked,
            handleClick: handleClick,
            screenSize,
            setScreenSize

        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)