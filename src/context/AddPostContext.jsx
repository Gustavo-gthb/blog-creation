'use client';

import { AddPostContext } from './AddPostContext';
import { createContext } from 'react';

export const AddPostContext = createContext()

export const AddPostProvider = () => {
    return <AddPostContext></AddPostContext>
}
