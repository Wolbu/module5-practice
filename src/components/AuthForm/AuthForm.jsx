import s from './AuthForm.module.css';
import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  password: '',
};

const AuthForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} action="submit">
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter your name"
      />
      <input
        onChange={handleChange}
        type="password"
        value={formData.password}
        name="password"
        placeholder="Enter your password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default AuthForm;
