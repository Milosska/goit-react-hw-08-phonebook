import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

const GlobalLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default GlobalLayout;
