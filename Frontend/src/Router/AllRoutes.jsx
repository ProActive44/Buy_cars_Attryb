import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Account from '../Pages/Account';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account' element={<Account/>}/>
        </Routes>
    );
};

export default AllRoutes;