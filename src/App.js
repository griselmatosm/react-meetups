import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Layout from './components/layout/Layout'
import { MeetupsProvider } from './contexts/MeetupsContext'

function App () {
  return (
    <MeetupsProvider>
      <div data-testid='app'>
        <Header />
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </MeetupsProvider>
  )
}

export default App
