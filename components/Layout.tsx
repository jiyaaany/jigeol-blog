import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div>
    <Header />
    <div className={'p-5'}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;  