/* eslint-env jest */
import React, { act } from 'react'
import { screen } from '@testing-library/react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MeetupsProvider } from './contexts/MeetupsContext'

// Mock data for meetups
const mockMeetups = [
  { id: '1', title: 'Mock Meetup 1', isFavorite: true, image: '', address: '', description: '' },
  { id: '2', title: 'Mock Meetup 2', isFavorite: false, image: '', address: '', description: '' }
]

// Mock localStorage for meetups
beforeAll(() => {
  window.localStorage.setItem('meetups', JSON.stringify(mockMeetups))
})

test('renders the App component with Header, Layout, and Outlet', async () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const root = createRoot(container)
  await act(async () => {
    root.render(
      <BrowserRouter>
        <MeetupsProvider>
          <App />
        </MeetupsProvider>
      </BrowserRouter>
    )
  })

  // Check if the main app div is rendered
  const appElement = screen.getByTestId('app')
  expect(appElement).toBeInTheDocument()

  // Check if the Header component is rendered
  const headerElement = screen.getByTestId('navigation-header')
  expect(headerElement).toBeInTheDocument()

  // Check if the Layout component is rendered
  const layoutElement = screen.getByTestId('layout')
  expect(layoutElement).toBeInTheDocument()
})
