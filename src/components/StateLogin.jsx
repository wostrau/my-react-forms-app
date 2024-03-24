import { Input } from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    console.log({
      'email >>>': emailValue,
      'password >>>': passwordValue,
    });
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
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailHasError && 'Please enter a valid email!'}
        />

        <Input
          id='password'
          type='password'
          name='password'
          label='Password'
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordHasError && 'Please enter a valid password!'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
