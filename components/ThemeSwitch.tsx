"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();
    
    useEffect(()=> setMounted(true), []);

    if(!mounted){
        return <span className="loading"></span>
    }
    if(resolvedTheme === 'dark'){
        return <button className='dark:text-white' onClick={()=> setTheme("light")}><IoSunny /></button>
    }
    if(resolvedTheme === "light"){
        return <button onClick={()=> setTheme("dark")}><IoMoon /></button>
    }
}

export default ThemeSwitch
