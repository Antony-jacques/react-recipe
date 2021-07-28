import React, {useState, createContext} from 'react';

export const MyContext = createContext()

const ContextProvider = (props) => {

    const [lang, setLang] = useState("French");
    console.log(lang)

    const toggleCountry = (country) => {
        setLang(country)
    }

    return (
        <MyContext.Provider value={{lang, toggleCountry}}>
            {props.children}
        </MyContext.Provider>
    );
}

export default ContextProvider;
