import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div>
    <Header />
    <div style={{paddingTop: 56, minHeight: 'calc(100vh - 150px)'}}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;  