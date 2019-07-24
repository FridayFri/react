import React from 'react';
import logo from './logo.svg';
import './App.css';
import StateHook from './hook/stateHook'
import PrepareForEffectHook from './hook/prepareForEffectHook'
import EffectHookDemo from './hook/effectHook'
import ReducerHook from './hook/ReducerHook'
function App() {
  return (
    <div className="App">
      <PrepareForEffectHook/>
      EffectHookDemo:<EffectHookDemo />
      <StateHook />
      <ReducerHook/>
    </div>
  );
}

export default App;
