import { useMeetups } from '../contexts/MeetupsContext'
import MeetupItem from '../components/meetups/MeetupItem'

export function FavoritesPage () {
  const { meetups } = useMeetups()
  const favorites = meetups.filter((meetup) => meetup.isFavorite)
  return (
    <section>
      <h1>Favorite Meetups</h1>
      <ul>
        {favorites.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            isFavorite={meetup.isFavorite}
          />
        ))}
      </ul>
    </section>
  )
}
