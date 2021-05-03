import React from 'react';

import { SackProvider } from './context/globalState';
import UserForm from './components/UserForm';

function App() {
  return (
    <div>
      <SackProvider>
        <UserForm />
      </SackProvider>
    </div>
  );
}

export default App;
