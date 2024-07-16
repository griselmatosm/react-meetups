import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header'
import Layout from './components/layout/Layout'

function App () {
  return (
    <div data-test='app'>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
