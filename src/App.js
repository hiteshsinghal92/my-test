import './App.css';

import React,{ useState } from 'react';
import MyCountContext from './Context/myContext';


import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CheckHooks from './Component/CheckHooks';
import Count from './Component/Count';
import HomePage from './Component/HomePage';
import Batch from './Component/Batch';
import Worker from './Component/Worker';
import Reducer from './Component/Reducer';
import PageIn from './PageIn/PageIn';
import Imperative from './Imperative/Imperative';
import ProtectRoute from './Component/ProtectRoute';
import PostData from './Component/PostData';
import { TestD } from './Component/TestD';

function App() {
  const [countT,setCountT] = useState(10);
  return (
    <Provider store={store}>
    <MyCountContext.Provider value={[countT,setCountT]}>
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/count' element={<Count/>}/>
      <Route path='/checkHooks' element={<CheckHooks/>}/>
      <Route path='/Batch18' element={<Batch/>}/>
      <Route path='/worker' element={<Worker/>}/>
      <Route path='/reducer' element={<Reducer/>}/>
      <Route path='/pagei' element={<PageIn/>}/>
      <Route path='/imperative' element={
        <ProtectRoute auth={false}>
          <Imperative/>
        </ProtectRoute>
      }/>

    <Route path='/post-data' element={<PostData/>}/>
    <Route path='/test1' element={<TestD/>}/>
    </Routes>
    </BrowserRouter>

    </MyCountContext.Provider>
    </Provider>
  );
}

export default App;