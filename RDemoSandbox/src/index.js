import React from 'react';
import { render } from 'react-dom';
import BasicComp from './BasicComp';
import BasicClassComp from './BasicClassComp';
import ClassCompWithState from './ClassCompWithState'
import ClassCompUpdatingState from './ClassCompUpdatingState'
import ParentComponent from './ParentComponent'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div>
    <ClassCompUpdatingState name="classupdatestate" />
    <ParentComponent name="classiteratestate" />
    <h2>fuckmagic</h2>
  </div>
);

render(<App />, document.getElementById('root'));
