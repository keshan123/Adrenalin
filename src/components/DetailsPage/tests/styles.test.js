import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {
  PageContainer,
  DetailsContainer,
  DetailsImage,
  DetailsInfo,
  DetailsTitle,
  DetailsQuestionsContainer,
  DetailsQuestionsTitle,
  DetailsQuestionsBody,
  DetailsTagContainer,
  DetailsImageTag,
} from '../styles';

test('PageContainer renders', () => {
  const tree = renderer.create(
      <PageContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsContainer renders', () => {
  const tree = renderer.create(
      <DetailsContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsImage renders', () => {
  const tree = renderer.create(
      <DetailsImage/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsInfo renders', () => {
  const tree = renderer.create(
      <DetailsInfo/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsTitle renders', () => {
  const tree = renderer.create(
      <DetailsTitle/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsQuestionsContainer renders', () => {
  const tree = renderer.create(
      <DetailsQuestionsContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsQuestionsTitle renders', () => {
  const tree = renderer.create(
      <DetailsQuestionsTitle/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsQuestionsBody renders', () => {
  const tree = renderer.create(
      <DetailsQuestionsBody/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsTagContainer renders', () => {
  const tree = renderer.create(
      <DetailsTagContainer/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('DetailsImageTag renders', () => {
  const tree = renderer.create(
      <DetailsImageTag/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
