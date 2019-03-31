import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components'
import Footer from '../index'

test('Footer renders', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Footer/>
    </BrowserRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
