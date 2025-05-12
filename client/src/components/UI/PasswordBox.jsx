import React from 'react';
import '../../styles/components/auth.scss'

function PasswordBox({...props}) {
    //password show or hide
    const [show,setShow] = React.useState(false);

  return (
    <div className="password">
        <input type={show?'text':'password'} className='password-input' {...props} />
        <div className='eye-btn' onClick={()=>setShow(!show)}>
            {
                show?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M8 11c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3m0-5c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"/>
                    <path fill="currentColor" d="M8 13c-3.19 0-5.99-1.94-6.97-4.84a.44.44 0 0 1 0-.32C2.01 4.95 4.82 3 8 3s5.99 1.94 6.97 4.84c.04.1.04.22 0 .32C13.99 11.05 11.18 13 8 13M2.03 8c.89 2.4 3.27 4 5.97 4s5.07-1.6 5.97-4C13.08 5.6 10.7 4 8 4S2.93 5.6 2.03 8"/>
                    <path fill="currentColor" d="M14 14.5a.47.47 0 0 1-.35-.15l-12-12c-.2-.2-.2-.51 0-.71s.51-.2.71 0l11.99 12.01c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9"/>
                </svg>
            }
        </div>
    </div>
  )
}

export default PasswordBox