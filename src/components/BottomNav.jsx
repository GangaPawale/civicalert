// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link ,NavLink} from 'react-router-dom';


function BottomNav() {
  


  return (
    
        <div className='absolute bottom-0 left-0 right-0 flex-1 p-4 border sm:hidden ' >
        <ul className='flex flex-row justify-between    '>

        <NavLink to={'/'} className='flex flex-col items-center'>
            {/* <img src="src\assets\icons\home.svg" alt="home" className='w-[20px] h-[20px] ' />
           <span>Home</span>
            */}
             {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/homefill.svg" : "src/assets/icons/homeoutline.svg"}
                  alt="Home"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pt-1 transition-all font-semibold":"group-hover:pt-1 transition-all"}>Home</span>
              </>
            )}
        </NavLink>

        <NavLink to={'/profile'} className='flex flex-col items-center'>
        {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/singlepersonfill.svg" : "src/assets/icons/singlepersonoutline.svg"}
                  alt="profile"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pt-1 transition-all font-semibold":"group-hover:pt-1 transition-all"}>Profile</span>
              </>
            )}
        </NavLink>

        <NavLink to='/notifications' className='flex flex-col items-center'>
        {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/notificationfill.svg" : "src/assets/icons/notificationoutline.svg"}
                  alt="notification"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pt-1 transition-all font-semibold":"group-hover:pt-1 transition-all"}>Notifications</span>
              </>
            )}
        </NavLink>

        <NavLink to={'/complaints'} className='flex flex-col items-center'>
        {({ isActive }) => (
              <>
                <img
                  src={isActive ? "src/assets/icons/person2fill.svg" : "src/assets/icons/person2outline.svg"}
                  alt="person2"
                  className='w-5 h-5'
                />
                <span className={isActive?"group-hover:pt-1 transition-all font-semibold":"group-hover:pt-1 transition-all"}>Complaints</span>
              </>
            )}
        </NavLink>
        </ul>

        

        </div>
            
       
   
  );
}

export default BottomNav;
