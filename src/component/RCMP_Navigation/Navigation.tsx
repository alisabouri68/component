import React from 'react'
import Button from '../RCMP_Button/Button'
import { dataNav } from '../../db';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation()
  return (
    <nav
      className='w-fit min-h-full p-2 pe-1 hidden md:flex '>

      <ul className='flex flex-col items-center rounded-md shadow h-full gap-2 *:w-full *:flex *:items-center *:justify-center'>
        {/* <li className='border-b border-b-amber-500'>
          <span>Logo</span>
        </li> */}
        {
          dataNav && dataNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.id} className={isActive ? "border-l-2 border-[#45A0BC] " : "border-l-2 border-transparent "}>
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
