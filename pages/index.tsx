import Home from './home';
import { useState } from 'react';

const Index = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <Home />
    </div>
  );

}

export default Index;
