import React from 'react'
import style from './Home.module.css';

export default function Header({titel , desc , vh}) {
  return (
    <div>
        <header className={style.header}>
        <div
          className=
          {`container d-flex justify-content-center align-items-center flex-column text-center w-100`}
          style={{height:vh +'vh'}}
        >
          <div className="text-white">
            <h1>{titel}</h1>
            <p className="w-75 m-auto mt-5">
              {desc}
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}
