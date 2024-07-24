/* eslint-env jest */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import MeetupItem from '.'
import { useMeetups } from '../../../contexts/MeetupsContext'

// Mock context
jest.mock('../../../contexts/MeetupsContext', () => {
  const originalModule = jest.requireActual('../../../contexts/MeetupsContext')
  return {
    ...originalModule,
    useMeetups: jest.fn()
  }
})

// Mock navigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

const mockToggleFavorites = jest.fn()
const mockNavigate = jest.fn()

const mockMeetup = {
  id: 'm1',
  image: 'test-image.jpg',
  title: 'Test Meetup',
  address: '123 Test St',
  description: 'This is a test meetup',
  isFavorite: false
}

beforeEach(() => {
  jest.clearAllMocks()
  useMeetups.mockReturnValue({
    toggleFavorites: mockToggleFavorites
  })

  useNavigate.mockReturnValue(mockNavigate)
})

test('renders meetup item content', () => {
  render(
    <BrowserRouter>
      <MeetupItem {...mockMeetup} />
    </BrowserRouter>
  )

  expect(screen.getByText('Test Meetup')).toBeInTheDocument()
  expect(screen.getByText('123 Test St')).toBeInTheDocument()
  expect(screen.getByText('This is a test meetup')).toBeInTheDocument()
  expect(screen.getByAltText('Test Meetup')).toBeInTheDocument()
  expect(screen.getByRole('button')).toHaveTextContent('Add to favorites')
})

test('calls toggleFavorites and navigates on button click', () => {
  render(
    <BrowserRouter>
      <MeetupItem {...mockMeetup} />
    </BrowserRouter>
  )

  const button = screen.getByRole('button')
  fireEvent.click(button)

  expect(mockToggleFavorites).toHaveBeenCalledWith({ id: 'm1' })
  expect(mockNavigate).toHaveBeenCalledWith('/favorites')
})

test('button text changes when isFavorite is true', () => {
  render(
    <BrowserRouter>
      <MeetupItem {...mockMeetup} isFavorite />
    </BrowserRouter>
  )

  expect(screen.getByRole('button')).toHaveTextContent('Remove from favorites')
})
