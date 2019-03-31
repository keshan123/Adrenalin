import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components'
import Navigation from '../index'

test('Navigation renders', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
