import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'
import { useMeetups } from '../../contexts/MeetupsContext'

export default function MeetupList () {
  const { meetups, isLoading, isError } = useMeetups()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading meetups</p>

  return (
    <ul className={classes.list}>
      {meetups.map(({ id, image, title, address, description, isFavorite }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
          description={description}
          isFavorite={isFavorite}
        />
      ))}
    </ul>
  )
}
