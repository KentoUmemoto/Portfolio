import { Outlet } from 'react-router-dom'
import '@/index.css'

export const Catch = () => {
  return <div>Something went wrong... Caught at _app error boundary</div>
}

export const Pending = () => <div>Loading from _app...</div>

export default function App() {
  return (
    <>
      <div className={'min-h-screen w-full bg-base-200'}>
        <Outlet />
      </div>
    </>
  )
}
