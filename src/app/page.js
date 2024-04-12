import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import AddPost from "@/components/AddPost";

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <AddPost />
    </main>
  );
}
