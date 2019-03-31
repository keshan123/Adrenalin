import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom';
import 'jest-styled-components'
import DetailsPage from '../index'

const match = { params : { id : 1  } }

test('DetailsPage renders', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <DetailsPage
        match={match}
      />
    </BrowserRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
