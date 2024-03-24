"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();
    console.log(resolvedTheme);
    
    useEffect(()=> setMounted(true), []);

    if(!mounted){
        return <span className="loading"></span>
    }
    if(resolvedTheme === 'dark'){
        return <button onClick={()=> setTheme("light")}>Light</button>
    }
    if(resolvedTheme === "light"){
        return <button onClick={()=> setTheme("dark")}>Dark</button>
    }
}

export default ThemeSwitch
