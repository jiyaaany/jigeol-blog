import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = props => (
  <div>
    <Header />
    <Container style={{paddingTop: 56, minHeight: 'calc(100vh - 150px)'}}>
      {props.children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
