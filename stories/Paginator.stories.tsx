import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Paginator } from '../src/components/Paginator';

const stories = storiesOf('Paginator', module);

const styles = {
  hideBackNextButtonText: false,
  backAndNextTextButtonColor: 'black',
  paginatorButtonColor: 'green',
  paginatorButtonBackgroundColor: '#FFF8DC',
  paginatorButtonSelectedColor: 'red',
  paginatorButtonHoverColor: '#F0F8FF',
  lateralMargin: '0',
};

stories.add('Paginator', () => {
  const [items, setItems] = useState<any | null>([]);
  const { data, totalPages } = items;
  const [currentPate, setCurrentPate] = useState(1);

  const getData = async (page: number) => {
    const response = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
    );
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getData(0);
  }, []);

  const callbackHandle = (pageNumber: number) => {
    getData(pageNumber);
    setCurrentPate(pageNumber);
  };

  const mockProps = {
    page: 1,
    pageSize: 10,
    totalItems: totalPages,
    pageGroupSize: 7,
    styles,
    callback: callbackHandle,
    items: data,
  };

  return (
    <>
      <Paginator {...mockProps} />
      <h1>Page: {currentPate}</h1>
      <ul>
        {data && data.map((item: any) => <li key={item._id}>{item.name}</li>)}
      </ul>
    </>
  );
});
