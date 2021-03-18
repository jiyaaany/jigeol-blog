import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Nav from 'react-bootstrap/Nav';

const Footer = () => (
  <footer className="footer">
    <a href="#/" className="lnk-main">
      <img src="/img/pc/common-logo.png" alt="지걸블로그" />
    </a>
    <div className="footer-wrap">
      <address>
        <p>경기도 하남시 미사대로 410</p>
        <p><strong>TEL</strong>010-5021-2987</p>
      </address>
      <div className="sitemap">
        <a className="btn-inquiry" href="#">제휴·문의하기</a>
        <span className="divider" />
        <a style={{fontWeight: 'bold'}} href="/">개인정보처리방침</a>
        <span className="divider" />
        <a style={{fontWeight: 'bold'}} href="http://www.kca.go.kr/ccm/" target="_blank">
          {/*<img style={{width: 28}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAWCAYAAAClrE55AAAAAXNSR0IArs4c6QAABNdJREFUSA29ll9s01UUx23X1s4VGGkL2SLQbiCM7AGzrnVdN2Zkmk0aHCaAvvhgWJwPGl+MGMAHDDNL1KBTUGCJ0wdxUzfCKEQ0M6t0o5sxRCCImrpE/oQ0Q2jG2LrWz/nR3y/t1tURE25ye/59z7nnnnvu7U/3wByjsrKyJJFIbMHcqNPpnMlk0g5/DT4CHYB2hMPhP+G1UVVVtQafddPT06XYCzHE8RvLy8sbNRqNZ4LBYAZec4TRpQvCV1RU2AiyB3Y7QeLwP0DPI1+HXwItRd4AfYjZazAYXkL2svjbyGuZMXC/o7sEjSMXw1dALcyz6N4YHh4OwGeMjERcLlc5Tn2AF0P3ssjHQ0NDNzM8EKqrqxdMTk4+x+5lceC62+Cv6/X6NofD0d3V1TWd7tPQ0PBgNBqtJ9md6D3gO+12e3MgELij4rREPB7PWoAhAv6FcePIyMioCpqL4rM0Ho93ErgWzAZ2+tNcWFXPkW9nA+34hDmu+lAodFtsevkh4EIC9sCOUgXffJIQP6p1raSkxC8ss5dKFYs+16CvDlK5J9mwa2pqqkPFKomQxA4URWTYlO0oVHA2yjFMms3mJgKfoKKmbJiZOpL5kYo047ONCm0Vu66mpsY+Pj4egX+XSuwW5f0a9OQpknGwXplhYmKiCcaYn5//fnoCXq93BQ25B+BjZH+H2cNOdtXV1RXGYrFdYKW8ZvRheuN58XW73Rs5/zdhl2E7x7VtQ26Bd4OLom8Hqx0H8lvMoMlkqtUDehphgDs+BlWG9AxJDGDbQoBj0K8IaIbqSKIH+hrAn5mH4RPixO5WczTfwEoSHfhJ838PX4/uM6YJ/jBHIVdfGWzsNMxleqXRgLEMofuu6e4vi25FvwyphR0cUG0EcaNfzyIH0LeoeqHoarEZmR9xxO+QWAx1G/ovwe7G91dsR4j9BPpTKZ8k71YQvlyatYh5RQzqAPxIiu9XdUIJquihGfoUZlEKExHKolkpvvLiagP5b4Qi5dZo2hSDMZJi16TbSFDVr07X/wefFDsxFZoFK6+vwcCPVEOqog3ekj6u9F521U5JLdAogazov6Z3LpHQ65T0Bu/BefgyjuJDzfneGVn7qp4FLsB40v0HBwcjyJuw3WChz0nkOLRZXkF0fmYY+z5038HLM/9/hhvn3ySRPpgan8+3OD0aDdbPLOdqWdEX+/3+OrGju8h8fAGDCskNsYm+oKDgENhVFovlmMiYAyLzLHwqss1mO5uStbdK/lbwl74LaA8aZX5P3glxul+D4/2CtZ6yWq0OZU0UrcxbfE+snG8SXM9P6J9188XPxOG7njUTzFfEptwaStwKf4WH5Vt5zGY6ZZMpqYseOQl+VTZ7Lh2Ll+LbTVuEwO0XrJKI/NGRzDPIy7ktQYDLxZhrgG/EflNeT3ZXmwubbiO2D/k0M0bPNHHjpsSufY+IQLnn9WHE/42Fp/5lXF6kMhJIvsz2s8MPpJnhZw3+h5xUQT6MXmCeAbuZnryqAjMSESUZ5/pUfDjV5XLlCgl2lAq+yp/bNvgd2BZCw9BfoPKBJY+YfKN40T0KHUPf6nQ698nnA7I2ZiWiWij3zI/nJQS5hf0PZj98Jzs6p+Jp9HyS2syun0W3EvsKqMS/zBRcL8n0chT/wM8a/wKlFH23+Tv5SgAAAABJRU5ErkJggg==" srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAWCAYAAAClrE55AAAAAXNSR0IArs4c6QAABNdJREFUSA29ll9s01UUx23X1s4VGGkL2SLQbiCM7AGzrnVdN2Zkmk0aHCaAvvhgWJwPGl+MGMAHDDNL1KBTUGCJ0wdxUzfCKEQ0M6t0o5sxRCCImrpE/oQ0Q2jG2LrWz/nR3y/t1tURE25ye/59z7nnnnvu7U/3wByjsrKyJJFIbMHcqNPpnMlk0g5/DT4CHYB2hMPhP+G1UVVVtQafddPT06XYCzHE8RvLy8sbNRqNZ4LBYAZec4TRpQvCV1RU2AiyB3Y7QeLwP0DPI1+HXwItRd4AfYjZazAYXkL2svjbyGuZMXC/o7sEjSMXw1dALcyz6N4YHh4OwGeMjERcLlc5Tn2AF0P3ssjHQ0NDNzM8EKqrqxdMTk4+x+5lceC62+Cv6/X6NofD0d3V1TWd7tPQ0PBgNBqtJ9md6D3gO+12e3MgELij4rREPB7PWoAhAv6FcePIyMioCpqL4rM0Ho93ErgWzAZ2+tNcWFXPkW9nA+34hDmu+lAodFtsevkh4EIC9sCOUgXffJIQP6p1raSkxC8ss5dKFYs+16CvDlK5J9mwa2pqqkPFKomQxA4URWTYlO0oVHA2yjFMms3mJgKfoKKmbJiZOpL5kYo047ONCm0Vu66mpsY+Pj4egX+XSuwW5f0a9OQpknGwXplhYmKiCcaYn5//fnoCXq93BQ25B+BjZH+H2cNOdtXV1RXGYrFdYKW8ZvRheuN58XW73Rs5/zdhl2E7x7VtQ26Bd4OLom8Hqx0H8lvMoMlkqtUDehphgDs+BlWG9AxJDGDbQoBj0K8IaIbqSKIH+hrAn5mH4RPixO5WczTfwEoSHfhJ838PX4/uM6YJ/jBHIVdfGWzsNMxleqXRgLEMofuu6e4vi25FvwyphR0cUG0EcaNfzyIH0LeoeqHoarEZmR9xxO+QWAx1G/ovwe7G91dsR4j9BPpTKZ8k71YQvlyatYh5RQzqAPxIiu9XdUIJquihGfoUZlEKExHKolkpvvLiagP5b4Qi5dZo2hSDMZJi16TbSFDVr07X/wefFDsxFZoFK6+vwcCPVEOqog3ekj6u9F521U5JLdAogazov6Z3LpHQ65T0Bu/BefgyjuJDzfneGVn7qp4FLsB40v0HBwcjyJuw3WChz0nkOLRZXkF0fmYY+z5038HLM/9/hhvn3ySRPpgan8+3OD0aDdbPLOdqWdEX+/3+OrGju8h8fAGDCskNsYm+oKDgENhVFovlmMiYAyLzLHwqss1mO5uStbdK/lbwl74LaA8aZX5P3glxul+D4/2CtZ6yWq0OZU0UrcxbfE+snG8SXM9P6J9188XPxOG7njUTzFfEptwaStwKf4WH5Vt5zGY6ZZMpqYseOQl+VTZ7Lh2Ll+LbTVuEwO0XrJKI/NGRzDPIy7ktQYDLxZhrgG/EflNeT3ZXmwubbiO2D/k0M0bPNHHjpsSufY+IQLnn9WHE/42Fp/5lXF6kMhJIvsz2s8MPpJnhZw3+h5xUQT6MXmCeAbuZnryqAjMSESUZ5/pUfDjV5XLlCgl2lAq+yp/bNvgd2BZCw9BfoPKBJY+YfKN40T0KHUPf6nQ698nnA7I2ZiWiWij3zI/nJQS5hf0PZj98Jzs6p+Jp9HyS2syun0W3EvsKqMS/zBRcL8n0chT/wM8a/wKlFH23+Tv5SgAAAABJRU5ErkJggg==" />*/}
          소비자중심경영
        </a>
      </div>
    </div>
    <p className="copyright">© <strong>Jigeol Corp.</strong> All right Reserved</p>
  </footer>
);

export default Footer;