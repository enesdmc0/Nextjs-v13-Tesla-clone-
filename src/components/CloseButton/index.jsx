"use client"
import React from 'react';
import {IoClose} from 'react-icons/io5';
import {toggleMenu} from '@/redux/tesla-slider';
import {useDispatch} from 'react-redux';

const CloseButton = () => {
    const dispatch = useDispatch()
    const handleClick =async () => {
       await dispatch(toggleMenu())
    }
    return (
        <div onClick={handleClick} className="flex items-center justify-end  cursor-pointer"><IoClose className="hover:bg-gray-200 p-2 rounded w-10 h-10 transition-all duration-700"/></div>
    );
};

export default CloseButton;
