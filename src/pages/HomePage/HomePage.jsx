import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const isLogged = JSON.parse(localStorage.getItem('FORMDATA'));
  return (
    <>{isLogged ? <h2>Welcome to Home Page</h2> : <Navigate to="/auth" />}</>
  );
};

export default HomePage;
