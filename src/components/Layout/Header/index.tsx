import type { FC } from 'react'
import styles from './index.module.scss'

export const Header: FC = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>
            Welcome to RPG Factory
        </h1>
    </header>
)