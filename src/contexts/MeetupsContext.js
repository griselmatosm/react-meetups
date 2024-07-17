import { createContext, useContext, useState, useEffect } from 'react'
import useSWR from 'swr'

const MeetupsContext = createContext()

const fetcher = url => {
  const data = typeof window !== 'undefined' ? window.localStorage.getItem(url) : null
  return data ? JSON.parse(data) : []
}

const MeetupsProvider = ({ children }) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR('meetups', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })
  const [meetups, setMeetups] = useState(data || [])

  useEffect(() => {
    if (data && !data.length && !error) {
      // fetch meetups if no data in local storage
      fetch('data.json')
        .then((response) => response.json())
        .then((fetchedData) => {
          window.localStorage.setItem('meetups', JSON.stringify(fetchedData))
          setMeetups(fetchedData)
          mutate(fetchedData, false)
        })
    } else {
      setMeetups(data)
    }
  }, [data, error, mutate])

  const addMeetup = (meetup) => {
    const newMeetups = [...meetups, { ...meetup, id: `m${meetups.length + 1}` }]
    setMeetups(newMeetups)
    window.localStorage.setItem('meetups', JSON.stringify(newMeetups))
    mutate(newMeetups, false) // upadate data without refetch
  }

  const toggleFavorites = ({ id }) => {
    const newMeetups = meetups.map((m) => {
      if (m.id === id) {
        return { ...m, isFavorite: !m.isFavorite }
      }
      return m
    })
    setMeetups(newMeetups)
    window.localStorage.setItem('meetups', JSON.stringify(newMeetups))
  }

  return (
    <MeetupsContext.Provider
      value={{
        meetups,
        addMeetup,
        toggleFavorites,
        isLoading: isLoading || isValidating,
        isError: error
      }}
    >
      {children}
    </MeetupsContext.Provider>
  )
}
const useMeetups = () => {
  const context = useContext(MeetupsContext)
  if (context === undefined) {
    throw new Error('useMeetups must be used within a MeetupsProvider')
  }
  return context
}

export { MeetupsProvider, useMeetups }
