/* eslint-env jest */
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Header from '.'
import { BrowserRouter } from 'react-router-dom'

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
  // Limpieza antes de cada prueba
  cleanup()
  const { useMeetups } = require('../../../contexts/MeetupsContext')
  useMeetups.mockReturnValue({
    meetups: mockMeetups,
    addMeetup: jest.fn(),
    toggleFavorites: jest.fn(),
    isLoading: false,
    isError: false
  })
})

afterEach(() => {
  // Limpieza después de cada prueba
  cleanup()
})

test('renders the logo', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>)

  const logoElements = screen.getByText('React Meetups')
  expect(logoElements).toBeInTheDocument()
})

test('renders the navigation links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const links = screen.getAllByRole('link')
  expect(links).toHaveLength(3)
})

test('renders the Add New Meetup link', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const addNewMeetupLink = screen.getByText('Add New Meetup')
  expect(addNewMeetupLink).toBeInTheDocument()
})

test('renders the My Favorites link', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const myFavoritesLink = screen.getByText('My Favorites')
  expect(myFavoritesLink).toBeInTheDocument()
})

test('renders the My Favorites badge', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const myFavoritesBadge = screen.getByText('1')
  expect(myFavoritesBadge).toBeInTheDocument()
})
