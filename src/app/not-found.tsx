import Link from 'next/link'
import style from './not-found.module.scss'
import type { FC } from 'react'

const NotFound: FC = () => (
    <div className={style.container}>
        <h1>404</h1>
        <p>Page not found</p>
        <Link href="/">
            Go back home
        </Link>
    </div>
)

export default NotFound
