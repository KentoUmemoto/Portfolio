import { Link } from '@/router'
import { Header } from '@/components/Header'
import { Helmet } from 'react-helmet-async'

const works = [
  { slug: 'portfolio', text: 'このポートフォリオです' },
  { slug: 'reminder', text: 'シンプルなリマインダー' },
]

export default function Works() {
  return (
    <>
      <Helmet>
        <title>Works</title>
      </Helmet>
      <Header />
      <div className='container mx-auto sm:px-24 sm:py-16 px-8 py-8 w-full min-h-screen'>
        <div className='grid grid-cols-2 gap-4'>
          {works.map((work) => {
            return (
              <div className='card p-4'>
                <div className='card-body'>
                  <div className='card-title'>{work.slug}</div>
                  <p>{work.text}</p>
                  <div className='card-action justify-end'>
                    <Link
                      to={'/works/:slug'}
                      params={{ slug: work.slug }}
                      role='button'
                      className='btn btn-outline'
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
