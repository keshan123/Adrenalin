import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {
  FooterContainer,
  LogoContainer,
  NavigationOptionsContainer,
  NavigationItem,
} from '../styles';

test('FooterContainer renders', () => {
  const tree = renderer.create(
      <FooterContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('LogoContainer renders', () => {
  const tree = renderer.create(
      <LogoContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('NavigationOptionsContainer renders', () => {
  const tree = renderer.create(
      <NavigationOptionsContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('NavigationItem renders', () => {
  const tree = renderer.create(
      <NavigationItem/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
