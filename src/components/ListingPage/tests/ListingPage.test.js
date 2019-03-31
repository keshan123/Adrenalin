import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components'
import ListingPage from '../index'

test('ListingPage renders', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <ListingPage/>
    </BrowserRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
