import type { FC } from 'react'
import styles from './index.module.scss'
import ThemeSwitcher from '@/components/Common/ThemeSwitcher'

export const Header: FC = () => (
    <header className={styles.header}>
        <h1 className={styles.title}>
            Welcome to RPG Factory
        </h1>
        <ThemeSwitcher />
    </header>
)