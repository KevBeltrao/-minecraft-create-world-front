import { FC } from 'react';
import Button from './components/Button';

const App: FC = () => (
  <div className="App">
    <Button
      label="Click me"
      disabled={false}
      onClick={() => console.log('oi')}
    />
  </div>
);

export default App;
