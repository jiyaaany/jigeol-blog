import Navbar from './Navbar';
import Footer from './Footer';
import { Container } from '@material-ui/core';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <Container>
      {children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
