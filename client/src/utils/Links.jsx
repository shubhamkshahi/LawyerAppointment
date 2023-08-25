import React from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';


const links = [
    {
        text:'Home Page',
        path:'.',
        icon:<FaWpforms />,
    },
    {
        text:'find lawyer',
        path:'lawyers',
        icon:<MdQueryStats />,
    },{
        text:'stats',
        path:'stats',
        icon:<IoBarChartSharp />,
    },
    {
        text:'profile',
        path:'product/:id',
        icon:<ImProfile />,
    },
    {
        text:'admin',
        path:'admin',
        icon:<MdAdminPanelSettings />,
    },
];
export default links;
