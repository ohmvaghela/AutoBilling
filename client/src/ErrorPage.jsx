import { useRouteError, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate('/');
    }
  }, [error, navigate]);

  return <div>Redirecting...</div>;
}

export default ErrorPage;
