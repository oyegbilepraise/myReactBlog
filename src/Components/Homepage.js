import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlide';

const Homepage = () => {
    const dispatch = useDispatch()
    const login = (response) => {
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }

    const isSignedIn = useSelector(selectSignedIn)
    return (
        <div className='text-center' style={{ display: isSignedIn ? 'none' : '', marginTop: '170px' }}>
            {!isSignedIn ? <div>
                <h2><i className="fa fa-book" aria-hidden="true"></i></h2>
                <h1 style={{ textDecoration: 'underline'}}>A Readers <br /> favourite place!</h1>
                <h6 className='text-center container' style={{fontSize: '10px',}}>
                    We provide high quality online resources for blogs, just sign in and start reading some wuality blogs
                </h6>
                <GoogleLogin
                    clientId='418351396234-ad9ronasav3id0kgfjtpgq0ej96j8pvi.apps.googleusercontent.com'
                    render={(renderProps) => (
                        <button className='btn btn-dark p-3' onClick={renderProps.onClick} disabled={renderProps.disabled} className=''>
                            Login with Google
                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                />
            </div> : ""}
        </div>
    )
}

export default Homepage;
// 418351396234-ad9ronasav3id0kgfjtpgq0ej96j8pvi.apps.googleusercontent.com
// 
// XbwgtBwlWeQ6O0yFOZMKzNk9
