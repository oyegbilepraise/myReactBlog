import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, setInput, setSignedIn, setUserData } from '../features/userSlide'

const Navbar = () => {
    const [inputValue, setInputValue] = useState('tech')
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)

    const dispatch = useDispatch()
    const logout =(res) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setInput(inputValue))
    }
    return (
        <div className='bg-dark p-2 d-flex'>
            <div className='container text-white d-flex'>
                <h5>praise_blog <i class="fa fa-book" aria-hidden="true"></i></h5>
                {isSignedIn && <div className='mx-5'> 
                    <input className='' placeholder='Search for a blog' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    <button onClick={handleClick}> Search </button>
                </div>}
            </div>

            {isSignedIn ? (<div className='d-flex'>
                <Avatar src={userData?.imageUrl} alt={userData?.name} />
                <h6 className='text-white mx-3 mt-2'>{userData?.givenName} </h6>
                <GoogleLogout  clientId='418351396234-ad9ronasav3id0kgfjtpgq0ej96j8pvi.apps.
                googleusercontent.com' 
                render={(renderProps) => (
                    <button className='btn btn-dark text-white bg-dark' onClick={renderProps.onClick} 
                    disabled={renderProps.disabled}>
                        Logout
                    </button>
                )}
                onLogoutSuccess={logout}
                />
            </div>) : <h6 className='d-flex text-white'>User not found </h6>}
        </div>
    )
}

export default Navbar;
