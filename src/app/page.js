import styles from "./page.module.css";
import Header from "@/components/layout/Header";
import { PostProvider } from "@/context/PostContext";
import ButtonAdd from "@/components/layout/ButtonAdd";

export default function Home() {
  const posts = [];

  return (
    <main className={styles.main}>
      <PostProvider>
        <Header />
        <ButtonAdd posts={posts} />
      </PostProvider>
    </main>
  );
}
