import React from 'react'
import Link from 'next/link'

const path = '/exercises/01-screensaver'

function ScreenSaverIndexPage() {
  return (
    <main className="screen-saver-wrapper">
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href={`${path}/lavender`}>lavender</Link>
        </li>
        <li>
          <Link href={`${path}/slateblue`}>slateblue</Link>
        </li>
        <li>
          <Link href={`${path}/hotpink`}>hotpink</Link>
        </li>
        <li>
          <Link href={`${path}/white`}>white</Link>
        </li>
      </ul>
    </main>
  )
}

export default ScreenSaverIndexPage
