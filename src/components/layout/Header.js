import { Link } from 'react-router-dom'
import cx from 'classnames'
import { useMeetups } from '../../contexts/MeetupsContext'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import classes from './Header.module.css'

export default function Header () {
  const { meetups } = useMeetups()
  const scrollDirection = useScrollDirection()

  const favoriteCount = meetups.reduce((total, meetup) => total + (meetup.isFavorite ? 1 : 0), 0)
  const headerClasses = cx(classes.header, { [classes.show]: scrollDirection === 'up', [classes.hide]: scrollDirection === 'down' })
  return (
    <header className={headerClasses} data-test='navigation-header'>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              All Meetups
            </Link>
          </li>

          <li>
            <Link to='new-meetup'>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to='favorites'>
              My Favorites
              <span className={classes.badge}>{favoriteCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
