import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<List header = 'Trelloyes' cards = {[{title:'test', content: 'content'}, {title: 'test2', content: 'more content'}]}/>, div)

    ReactDOM.unmountComponentAtNode(div);
});