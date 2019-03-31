import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {
  PageContainer,
  PreviewTile,
  PreviewTileContainer,
  TileImage,
  TileDescription,
  ViewCaseStudyLink,
  ImageTag,
} from '../styles';

test('PageContainer renders', () => {
  const tree = renderer.create(
      <PageContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PreviewTile renders', () => {
  const tree = renderer.create(
      <PreviewTile/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('PreviewTileContainer renders', () => {
  const tree = renderer.create(
      <PreviewTileContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TileImage renders', () => {
  const tree = renderer.create(
      <TileImage/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('TileDescription renders', () => {
  const tree = renderer.create(
      <TileDescription/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ViewCaseStudyLink renders', () => {
  const tree = renderer.create(
      <ViewCaseStudyLink/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ImageTag renders', () => {
  const tree = renderer.create(
      <ImageTag/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
