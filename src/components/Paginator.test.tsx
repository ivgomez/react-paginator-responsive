import React from 'react';
import * as ReactDOM from 'react-dom';
import { Paginator } from './Paginator';

const styles = {
  hideBackNextButtonText: false,
  backAndNextTextButtonColor: 'black',
  paginatorButtonColor: 'green',
  paginatorButtonBackgroundColor: '#FFF8DC',
  paginatorButtonSelectedColor: 'red',
  paginatorButtonHoverColor: '#F0F8FF',
  lateralMargin: '0',
};

const defaultProps = {
  page: 1,
  pageGroupSize: 6,
  totalItems: 127,
  pageSize: 12,
  items: [
    { officeID: 575, borough: 'Brooklyn', city: 'Brooklyn' },
    { officeID: 576, borough: null, city: 'San Diego' },
    { officeID: 577, borough: null, city: 'San Francisco' },
    { officeID: 578, borough: null, city: 'Princeville' },
    { officeID: 579, borough: null, city: 'Rhinebeck' },
    { officeID: 580, borough: null, city: 'Petaluma' },
    { officeID: 581, borough: null, city: 'Rancho Cucamonga' },
    { officeID: 582, borough: null, city: 'Reno' },
    { officeID: 583, borough: 'The Hamptons', city: 'Sag Harbo' },
    { officeID: 584, borough: null, city: 'Denver' },
    { officeID: 585, borough: null, city: 'Santa Rosa' },
    { officeID: 586, borough: null, city: 'Chicago' },
  ],
  styles,
};

describe('Paginator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paginator {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
