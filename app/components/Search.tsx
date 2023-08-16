'use client'

import React, {useState} from 'react';
import {useRouter} from "next/navigation";

const Search = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSubmit = async (e:any) =>{
        e.preventDefault();
        setSearch('')
        router.push(`/${search}/`)
    }

    return (
        <div>
            
        </div>
    );
};

export default Search;