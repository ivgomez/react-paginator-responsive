import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Paginator } from '../src/components/Paginator';

const stories = storiesOf('Paginator', module);

const styles = {
  hideBackNextButtonText: true,
  backAndNextTextButtonColor: 'black',
  paginatorButtonColor: '#54565B',
  paginatorButtonBackgroundColor: 'transparent',
  paginatorButtonSelectedColor: '#fff',
  // paginatorButtonHoverColor: '#F0F8FF',
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
    callback: callbackHandle,
    items: data,
    page: 1,
    pageGroupSize: 7,
    pageSize: 10,
    styles,
    totalItems: totalPages,
  };

  return (
    <>
      <h1 style={{marginTop: 0}}>Page {currentPate}</h1>
      <ul style={{marginBottom: '1.7rem'}}>
        {data && data.map((item: any) => <li key={item._id}>{item.name}</li>)}
      </ul>
      <Paginator {...mockProps} />
    </>
  );
});
