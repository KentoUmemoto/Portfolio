import { useState } from 'react'
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from 'react-terminal-ui'
import { useNavigate } from '@/router'

export const TerminalController = () => {
  const navigate = useNavigate()

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={1}>Welcome to my portfolio!</TerminalOutput>,
    <TerminalOutput key={2}>Click or following commands</TerminalOutput>,
    <TerminalOutput key={4}>
      <div className='inline'>
        <div className='inline hover:bg-white hover:text-black' onClick={onClickAbout}>
          'about'
        </div>
        : about me
      </div>
    </TerminalOutput>,
    <TerminalOutput key={5}>
      <div className='inline'>
        <div className='inline hover:bg-white hover:text-black' onClick={onClickWorks}>
          'works'
        </div>
        : my works
      </div>
    </TerminalOutput>,

    <TerminalOutput key={6}>
      <div className='inline'>
        <div className='inline hover:bg-white hover:text-black' onClick={onClickGithub}>
          'github'
        </div>
        : open my github
      </div>
    </TerminalOutput>,
  ])

  function onClickAbout() {
    navigate('/about')
  }
  function onClickWorks() {
    navigate('/works')
  }
  function onClickGithub() {
    window.open('https://github.com/KentoUmemoto')
  }

  function onInput(input: string) {
    const ld = [...terminalLineData]
    ld.push(<TerminalInput>{input}</TerminalInput>)
    if (input.toLocaleLowerCase().trim() === 'about') {
      onClickAbout()
    } else if (input.toLocaleLowerCase().trim() === 'works') {
      onClickWorks()
    } else if (input.toLocaleLowerCase().trim() === 'github') {
      onClickGithub()
    } else if (input) {
      ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>)
    }
    setTerminalLineData(ld)
  }
  return (
    <div className='max-h-full'>
      <Terminal
        name='Terminal'
        colorMode={ColorMode.Dark}
        onInput={onInput}
        height='300px'
      >
        {terminalLineData}
      </Terminal>
    </div>
  )
}
