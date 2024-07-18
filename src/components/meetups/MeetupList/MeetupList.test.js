/* eslint-env jest */
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import MeetupList from '.'
import { BrowserRouter } from 'react-router-dom'
import { useMeetups } from '../../../contexts/MeetupsContext'

// Mock context
jest.mock('../../../contexts/MeetupsContext', () => {
  const originalModule = jest.requireActual('../../../contexts/MeetupsContext')
  return {
    ...originalModule,
    useMeetups: jest.fn()
  }
})

const mockMeetups = [
  { id: 'm1', title: 'First Meetup', isFavorite: true },
  { id: 'm2', title: 'Second Meetup', isFavorite: false }
]

beforeEach(() => {
  cleanup()
})

afterEach(() => {
  cleanup()
})
describe('MeetupList Component', () => {
  test('renders meetups if not loading and no error', () => {
    useMeetups.mockReturnValue({
      meetups: mockMeetups,
      addMeetup: jest.fn(),
      toggleFavorites: jest.fn(),
      isLoading: false,
      isError: false
    })

    render(
      <BrowserRouter>
        <MeetupList />
      </BrowserRouter>
    )

    // Check if the meetups are rendered
    expect(screen.getByText('First Meetup')).toBeInTheDocument()
    expect(screen.getByText('Second Meetup')).toBeInTheDocument()
  })

  test('renders loading message if loading', () => {
    useMeetups.mockReturnValue({
      meetups: [],
      addMeetup: jest.fn(),
      toggleFavorites: jest.fn(),
      isLoading: true,
      isError: false
    })

    render(
      <BrowserRouter>
        <MeetupList />
      </BrowserRouter>
    )

    // Check if the loading message is rendered
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders error message if there is an error', () => {
    useMeetups.mockReturnValue({
      meetups: [],
      addMeetup: jest.fn(),
      toggleFavorites: jest.fn(),
      isLoading: false,
      isError: true
    })

    render(
      <BrowserRouter>
        <MeetupList />
      </BrowserRouter>
    )

    // Check if the error message is rendered
    expect(screen.getByText('Error loading meetups')).toBeInTheDocument()
  })
})
