import React, {useState, useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(){
    const [darkMode, setDarkMode] = useLocalStorage('darkmode', 'false');
    console.log(darkMode);

    useEffect(() => {
        const docBody = document.querySelector('body');

        if (darkMode === false){
            docBody.classList.remove('dark-mode');
        } else if (darkMode === true){
            docBody.classList.add('dark-mode');
        }

    }, [darkMode])

    return [darkMode, setDarkMode];
}