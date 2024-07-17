import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import { useMeetups } from '../../contexts/MeetupsContext'
import { useNavigate } from 'react-router-dom'

export default function MeetupItem ({ id, image, title, address, description, isFavorite }) {
  const { toggleFavorites } = useMeetups()
  const navigate = useNavigate()

  const buttonText = isFavorite ? 'Remove from favorites' : 'Add to favorites'
  const onToggleFavorites = () => {
    toggleFavorites({ id })
    navigate('/favorites')
  }
  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={onToggleFavorites}>{buttonText}</button>
        </div>
      </Card>
    </li>
  )
}
