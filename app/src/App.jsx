import { Routes, Route } from 'react-router-dom'
import { DashboardPage, PatientsPage, SinglePatientPage, UsersPage, SingleUserPage, LoginPage, HomePage, AboutPage } from '@pages'
import { PrivateRoute } from '@components'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<PrivateRoute page={<DashboardPage />} />} />
      <Route path='/patients' element={<PrivateRoute />}>
        <Route index element={<PatientsPage />} />
        <Route path=':id' element={<SinglePatientPage />} />
      </Route>
      <Route path='/users' element={<PrivateRoute />}>
        <Route index element={<UsersPage />} />
        <Route path=':id' element={<SingleUserPage />} />
      </Route>
      <Route path='/about'>
        <Route index element={<AboutPage />} />
        <Route path=':hash' element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
