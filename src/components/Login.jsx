import { useRef } from 'react';
import { useState } from 'react';

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValue, setEnteredValue] = useState({ email: '', password: '' });

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  // function handleEmailChange() {
  //   const emailValue = emailRef.current.value;

  //   if (didEdit.email) {
  //     setEmailIsInvalid(!emailValue.includes('@'));
  //   }
  // }

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');

  function handleInputBlur(e) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [e.target.name]: true,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (emailIsInvalid) return;

    console.log(enteredValue);
  }

  function handleInputChange(e) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [e.target.name]: false,
    }));
  }

  // function handleEmailChange(e) {
  //   setEnteredEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setEnteredPassword(e.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            // ref={emailRef}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={enteredValue.email}
          />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            // ref={passwordRef}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
