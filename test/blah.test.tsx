import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Paginator } from '../stories/Paginator.stories';

describe('Paginator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paginator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
