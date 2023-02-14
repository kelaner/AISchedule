import Wbutton from '@/components/button'
import Hello from '@/components/hello'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import MenuProps from '@/components/MenuProps'
import TimeCTable from '@/components/TimeCTable'
import Fsegmented from '@/components/Segmented'
import MenuProps1 from '@/components/MenuProps1'
import Fsegmented1 from '@/components/Segmented1'

export default function Home() {
    const [value, setValue] = useState(0)
    const [people,setPeople]=useState(0)
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>AISchedule System</h1>
                
                <div className={styles.choose}><MenuProps/></div>
                <div className={styles.formeralign}>
                    <div className={styles.findit1}><Fsegmented1/></div>
                    <div className={styles.fsegmented}><Fsegmented/></div>
                </div>

                <div className={styles.formeralign}>
                    <div className={styles.chooseit1}><MenuProps1/></div>
                    <div className={styles.chooseit2}><Wbutton /></div>
                </div>
                
                
                <div className={styles.beprimary}><TimeCTable/></div>
               {/* <div className={styles.value}>{value}</div>
                <div className={styles.value}>{people}</div>
                 <button onClick={() => setValue(value + 1)}>+</button>
                <button onClick={() => setValue(value - 1)}>-</button>
                <button onClick={() => setPeople(people + 1)}>+</button>
                <Hello /> */}
            </main>
        </>
    )
}
