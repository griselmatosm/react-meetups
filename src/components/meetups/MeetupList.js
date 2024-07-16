import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'
import { useFetch } from '../../util-hooks/useFetch'

export default function MeetupList () {
  const { data: meetups } = useFetch({
    url: '/data.json'
  })

  if (!meetups) return <p>Loading...</p>

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
