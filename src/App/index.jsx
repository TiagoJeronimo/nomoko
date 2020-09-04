import React, { Suspense } from 'react';
import PropertiesSearch from '../screens/PropertiesSearch';

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <PropertiesSearch />
    </Suspense>
  );
}

export default App;
