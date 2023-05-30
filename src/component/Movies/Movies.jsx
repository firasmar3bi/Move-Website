import React from 'react'
import Header from '../Header/Header'
import GitMoviesApi from './GitMoviesApi'
export default function Movies() {
  return (
  <>
  <Header
    titel={'Trending Movies'}
    desc={``}
    vh={50}
  />
    <GitMoviesApi />
  </>
  )
}
