import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'
import { useMeetups } from '../../hooks/useMeetups'
import { useEffect } from 'react'

export default function MeetupList () {
  const { data: meetups, isLoading, isError, mutate } = useMeetups()
  console.log('meetups', meetups)

  useEffect(() => {
    if (!meetups && !isLoading && !isError) {
      // fetch meetups
      fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
          window.localStorage.setItem('meetups', JSON.stringify(data))
          mutate(data, false)
        })
    }
  }, [meetups, isLoading, isError, mutate])

  if (!meetups && isLoading) return <p>Loading...</p>

  return (
    <ul className={classes.list}>
      {meetups.map(({ id, image, title, address, description }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
          description={description}
        />
      ))}
    </ul>
  )
}
