import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /home when the component mounts
    router.push('/home');
  }, []);

  return (
    <div>
      {/* Content of your index page (this will not be visible as the redirection happens immediately) */}
    </div>
  );
};

export default IndexPage;