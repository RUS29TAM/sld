import Image from "next/image";
import styles from "./page.module.css";
import Slider from "@/components/slider/Slider";
import Header from "@/components/header/header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <Slider/>
        </main>
    );
}
