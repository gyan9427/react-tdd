import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';
import PersonList from './PersonList';

describe('App',()=>{
  it('renders without crashing',()=>{
    const appWrapper = shallow(<App/>)
  });

  it('',()=>{
    const appWrapper = shallow(<App/>)
    appWrapper.find(PersonList);
  })
});