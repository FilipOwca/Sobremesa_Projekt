import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { FaCheck, FaInfoCircle, FaTimes } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/RegisterForm.css'
import { Link } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // If button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2){
      setErrMsg("Invalid Entry");
      return;
    }

    console.log(user, pwd);
    setSuccess(true);
  }


  return (
    <>
      {success ? (
          <section>
            <h1>Success!</h1>
            <p>
              <Link to='/' className='sign-up-link'>Sign In</Link>
            </p>
          </section>
      ) : (
        
      <section>

        <p ref={errRef} 
            className={errMsg ? "errmsg" : "offscreen"} 
            aria-live='assertive'>
          {errMsg}
        </p>

        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <FaCheck className={validName ? "valid" : "hide"} />
            <FaTimes className={validName || !user ? "hide" : "invalid"}/>
          </label>
          <input type='text'
            id='username'
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? 'false' : 'true'}
            aria-describedby='uidnote'
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p id='uidnote'
            className={userFocus && user && !validName ? "instructions" : "offscreen"}>
            <FaInfoCircle />
            4 to 24 characters. <br/>
            Must begin with a letter. <br/>
            Letters, numbers, underscores, hyphens allowed.
          </p>
  
          <label htmlFor='password'>
            Password:
            <FaCheck className={validPwd ? "valid" : "hide"}/>
            <FaTimes className={validPwd || !pwd ? "hide" : "invalid"}/>
          </label>
          <input type='password'
            id='password'
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby='pwdnote'
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <FaInfoCircle />
            8 to 24 characters.<br/>
            Mustinclude uppercase and lowercase letters, a number and a special character.<br/>
            Allowed special characters: <span arial-label="exclamation mark">!</span>
            <span aria-label='at symbol'>@</span>
            <span aria-label='hashtag'>#</span>
            <span aria-label='dollar sign'>$</span>
            <span aria-label='percent'>%</span>
          </p>
  
          <label htmlFor='confirm_pwd'>
            Confirm Password:
            <FaCheck className={validMatch && matchPwd ? "valid" : "hide"}/>
            <FaTimes className={validMatch || !matchPwd ? "hide" : "invalid"}/>
          </label>
          <input type='password'
            id='confirm_pwd'
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby='confirmnote'
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            />
          <p id='confirmnote' className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FaInfoCircle />
            Must match first password input field.
          </p>
  
          <button className='register-button' disabled={!validName || !validPwd || !validMatch ? true : false}>
            Sign Up
          </button>
  
        </form>
        <p>
          Already registered?<br/>
          <Link to='/' className='sign-up-link'>Sign In</Link>
        </p>

      </section>

      )}
    </>

  )
}

export default RegisterForm;
