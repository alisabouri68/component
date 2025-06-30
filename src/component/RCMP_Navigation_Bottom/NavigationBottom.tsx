import React from 'react'
import Button from '../RCMP_Button/Button'
import { dataNav } from '../../db';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation()
    return (
        <nav
            className='min-w-full p-2  fixed bottom-0 left-0 right-0 md:hidden '>

            <ul className='flex items-center justify-evenly  min-w-full h-full gap-2 py-4 rounded-md shadow'>
                {
                    dataNav && dataNav.map((item) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <li key={item.id} className=''>
                                <Link to={item.href}>
                                    <Button
                                        title={item.title}
                                        variant={isActive ? "primary" : "ghost"}
                                        size="sm"
                                        loading={false}
                                        iconLeft={item.icon}
                                        // onClick={() => alert('clicked')}
                                        direction="col"
                                    />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        </nav>
    )
}

export default Navigation
