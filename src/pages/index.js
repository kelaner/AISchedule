import Hello from '@/components/hello'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
    const [value, setValue] = useState(0)
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>AISchedule Demo</h1>
                <div className={styles.value}>{value}</div>
                <button onClick={() => setValue(value + 1)}>+</button>
                <button onClick={() => setValue(value - 1)}>-</button>
                <Hello />
            </main>
        </>
    )
}
