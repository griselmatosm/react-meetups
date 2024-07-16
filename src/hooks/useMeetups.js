import useSWR from 'swr'

const fetcher = url => {
  const data = typeof window !== 'undefined' ? window.localStorage.getItem(url) : null
  return data ? JSON.parse(data) : []
}

export const useMeetups = () => {
  const { data, error, mutate } = useSWR('meetups', fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}
