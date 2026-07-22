import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
export function Layout() {
  useScrollToTop();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
