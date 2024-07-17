import { useForm } from 'react-hook-form'
import Card from '../ui/Card'
import classes from './NewMeetupForm.module.css'
import { useNavigate } from 'react-router-dom'
import { useMeetups } from '../../contexts/MeetupsContext'

export default function NewMeetupForm () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { addMeetup } = useMeetups()
  const navigate = useNavigate()

  function submitHandler (data) {
    addMeetup(data)
    navigate('/')
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' {...register('title', { required: 'You must enter a title' })} />
          <p>{errors.title?.message}</p>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input {...register('image', { required: 'You must enter an image', pattern: { value: /https?:\/\//, message: 'Please enter a valid URL' } })} />
          <p>{errors.image?.message}</p>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' {...register('address', { required: 'You must enter an address' })} />
          <p>{errors.address?.message}</p>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea {...register('description', { required: 'You must enter a description' })} rows='5' />
          <p>{errors.description?.message}</p>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}
