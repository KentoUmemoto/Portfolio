import { ReactNode } from 'react'
import { useMatch } from 'react-router-dom'
import { useParams } from '@/router'
import { Footer } from '@/components/Footer'
import PORTFOLIO from '@/data/works/portfolio.mdx'
import REMINDER from '@/data/works/reminder.mdx'

const works: {
  [K: string]: () => JSX.Element
} = {
  portfolio: PORTFOLIO,
  reminder: REMINDER,
}

export default function Slug() {
  const { slug } = useParams('/works/:slug')
  const match = useMatch('/works/:slug')
  if (match && slug) {
    const SomeComponent = works[slug]
    return (
      <Wrapper>
        <SomeComponent />
      </Wrapper>
    )
  } else {
    return <>no much</>
  }
}

type Props = {
  children: ReactNode
}

function Wrapper({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='container mx-auto sm:px-24 sm:py-16 px-8 py-8 w-full flex-1'>
        <div className='prose prose-headings:mt-2 prose-headings:mb-4'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}
