import { FC } from 'react';
import Button from './components/Button';

const App: FC = () => (
  <div className="App">
    <Button disabled onClick={() => console.log('oi')}>
      Click me
    </Button>
  </div>
);

export default App;
