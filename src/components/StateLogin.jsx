import { useState } from 'react';
import { Input } from './Input';

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({ email: '', password: '' });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');
  const passwordIsInvalid = didEdit.password && enteredValue.password.trim().length < 6;

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValue) => ({
      ...prevValue,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [e.target.name]: false,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (emailIsInvalid) return;

    console.log(enteredValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          id='email'
          type='email'
          name='email'
          label='Email'
          onBlur={() => handleInputBlur('email')}
          onChange={() => handleInputChange('email', e.target.value)}
          value={enteredValue.email}
          error={emailIsInvalid && 'Please enter a valid email!'}
        />

        <Input
          id='password'
          type='password'
          name='password'
          label='Password'
          onBlur={() => handleInputBlur('password')}
          onChange={() => handleInputChange('password', e.target.value)}
          value={enteredValue.password}
          error={passwordIsInvalid && 'Please enter a valid password!'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
