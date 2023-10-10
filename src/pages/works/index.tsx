import { Link } from '@/router'
import { Footer } from '@/components/Footer'
import { Helmet } from 'react-helmet-async'

const works = [
  { slug: 'portfolio', text: 'このポートフォリオです' },
  { slug: 'reminder', text: 'シンプルなリマインダーアプリケーションです' },
]

export default function Works() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Helmet>
        <title>Works</title>
      </Helmet>
      <div className='container mx-auto sm:px-24 sm:py-16 px-4 py-8 w-full flex-1'>
        <div className='grid md:grid-cols-2 gap-4'>
          {works.map((work) => {
            return (
              <div className='card p-4 animate-fade-in-top' key={work.slug}>
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
      <Footer />
    </div>
  )
}
