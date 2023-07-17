import React from 'react'
import './Header.css'
import {Business, BusinessCenter, Chat, ChatOutlined, Home, Notifications, People, SearchOutlined, SupervisorAccount} from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import { logout, selectUser } from './features/user/userSlice'

function Header() {
    const user= useSelector(selectUser)
  const dispatch= useDispatch();

  console.log("Users value in header component :", user);

  const logoutApp= ()=>{
    console.log('Logout app gets called');
    dispatch(logout);
    auth.signOut();
  };

  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__leftFirst'>
                <img src='https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png'/>

                <div className='header__leftFirstInput'>
                    <SearchOutlined/>
                    <input placeholder='Search' type='text'/>
                </div>

            </div>
            <div className='header__leftSecond'>
                <div className='header__option header__option--active'>
                    <Home fontSize='medium'/>
                    <h3>Home</h3>
                </div>
                <div className='header__option'>
                    <SupervisorAccount fontSize='medium'/>
                    <h3>My Network</h3>
                </div>

                <div className='header__option'>
                    <BusinessCenter fontSize='medium'/>
                    <h3>Jobs</h3>
                </div>

                <div className='header__option'>
                    <Chat fontSize='medium'/>
                    <h3>Messaging</h3>
                </div>

                <div className='header__option'>
                    <Notifications fontSize='medium'/>
                    <h3>Notifications</h3>
                </div>

                <div className='header__option'>
                    <Avatar onClick={logoutApp}
                    className='header__optionAvatar' style={{width: 30, height: 30}}>
                        {/* {user.email[0]} */}
                        </Avatar>
                    <h3>Me</h3>
                </div>

            </div>

        </div>
        <div className='header__right'>

            <div className='header__option'>
                <Business fontSize='medium'/>
                <h3>For Business</h3>
            </div>
            

            <div className='header__rightHired'>
                <h3>Get hired faster</h3>
                <h3>Try Premium Free</h3>
            </div>
        </div>
    </div>
  )
}

export default Header