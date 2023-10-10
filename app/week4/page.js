"use client";

import NewItem from './new-item.js';
import { useState } from 'react';

const Page = () => {
    const [state, setState] = useState(0);

    return(
        <div>
            <h1></h1>
            <NewItem />
        </div>
    );
};

export default Page;