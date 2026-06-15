import Keyboard from "@/components/Keyboard";
import styles from "../page.module.css";


export default function KeyboardPage() {

    return (
        <section className={styles.page}>
            <main className={styles.main}>
                <div className={styles.hero}>
                    <h1>Keyboard</h1>
                </div>

                <Keyboard />

            </main>
        </section>
    )
}