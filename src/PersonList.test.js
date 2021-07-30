import React from 'react'
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('PersonsList', ()=>{
    it('renders a ul element', ()=>{
        const personListWrapper = shallow(<PersonList/>)
        const personListUls = personListWrapper.find('ul')

        expect(personListUls).toHaveLength(1);
    });

    it('renders no li elements when no people exist', () => {
        const person=[]
        const personListWrapper = shallow(<PersonList person={person}/>);
        const personListItems = personListWrapper.find('li');
        expect(personListItems).toHaveLength(0);
    });

    it('renders one li element when one person exists',()=>{
        const person=[{firstName:'Alan',lastName:'Turing'}]
        const personListWrapper = shallow(<PersonList person={person}/>);
        const personListItems = personListWrapper.find('li');
        expect(personListItems).toHaveLength(1);
    })
    it('renders 1 element for each array element',()=>{
        const person=[
            {firstName:'Alan',lastName:'Turing'},
            {firstName:'jane',lastName:'chevy'},

        ]
        const personListWrapper = shallow(<PersonList person={person}/>);
        const personListItems = personListWrapper.find('li');
        expect(personListItems).toHaveLength(2);
    });
    it('',()=>{
        const person=[
            {firstName:'Alan',lastName:'Turing'},
        ]
        const personListWrapper = shallow(<PersonList person={person}/>);
        const personListIems = personListWrapper.find('li')
        expect(personListIems.text()).toContain(person[0].firstName)
    })

})