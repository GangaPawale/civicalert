import React from 'react'
import {Link, NavLink}  from 'react-router-dom'

const LeftSideBar = ({classes}) => {
  return (
    <div className={`${classes} `} >

       

        <ul className='flex flex-col justify-start  gap-6'>
        <div className='py-6 flex gap-3 items-center'>
            <img src="src\assets\icons\applogogreen.png" alt="civic alert logo"  className='h-[30px] w-[30px] rounded-lg '/>
            <span className='font-bold text-xl'>Civic Alert</span>
        </div>
       

            <li className='group'>
                <NavLink className={'flex gap-3' } to={""}>
                

                {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/homefill.svg" : "src/assets/icons/homeoutline.svg"}
                  alt="Home"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pl-1 transition-all font-semibold":"group-hover:pl-1 transition-all"}>Home</span>
              </>
            )}
                </NavLink>
            </li>
            <li className='group'>
                <NavLink className='flex gap-3 ' to={'/profile'}>
                {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/singlepersonfill.svg" : "src/assets/icons/singlepersonoutline.svg"}
                  alt="singleuser"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pl-1 transition-all font-semibold":"group-hover:pl-1 transition-all"}>Profile</span>
              </>
            )}
                </NavLink>
            </li>
            <li className='group'>
                <NavLink className='flex gap-3' to={'/notifications'}>
                {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/notificationfill.svg" : "src/assets/icons/notificationoutline.svg"}
                  alt="notification"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pl-1 transition-all font-semibold":"group-hover:pl-1 transition-all"}>Notifications</span>
              </>
            )}
                </NavLink>
            </li>
            <li className='group'>
                <NavLink className='flex gap-3' to={'/complaints' }  >
                {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/person2fill.svg" : "src/assets/icons/person2outline.svg"}
                  alt="person2"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pl-1 transition-all font-semibold":"group-hover:pl-1 transition-all"}>Complaints</span>
              </>
            )}
                </NavLink>
            </li>
            
        </ul>
    </div>
  )
}

export default LeftSideBar;