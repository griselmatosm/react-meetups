import MeetupList from '../components/meetups/MeetupList'
import classes from './../components/meetups/MeetupList.module.css'

export function AllMeetupsPage () {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupList />
      </ul>
    </section>
  )
}
