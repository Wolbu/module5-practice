import AuthForm from 'components/AuthForm/AuthForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem('FORMDATA'));
  });

  useEffect(() => {
    if (formData) {
      localStorage.setItem('FORMDATA', JSON.stringify(formData));
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const onSubmit = data => {
    setFormData(data);
  };

  return <AuthForm onSubmit={onSubmit} />;
};

export default AuthPage;
