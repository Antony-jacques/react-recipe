import React, {useState, createContext} from 'react';

export const MyContext = createContext()

const ContextProvider = (props) => {

    const [lang, setLang] = useState("EN");


    return (
        <MyContext.Provider value={{lang}}>
            {props.children}
        </MyContext.Provider>
    );
}

export default ContextProvider;
