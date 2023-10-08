import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@/index.css'

export const Catch = () => {
  return <div>Something went wrong... Caught at _app error boundary</div>
}

export const Pending = () => <div>Loading from _app...</div>

export default function App() {
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', 'corporate')
  }, [])
  return (
    <>
      <HelmetProvider>
        <div className={'min-h-screen w-full bg-base-200'}>
          <Outlet />
        </div>
      </HelmetProvider>
    </>
  )
}
