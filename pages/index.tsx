import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import useDarkMode from "use-dark-mode"
import Card from "../components/card"
import Search from "../components/search"
import Button from "../components/ui/button"
import styles from "../styles/Home.module.css"

export default function Home({ data }) {
  // Search logic
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = data.gitmojis.filter(
      (gitmoji) =>
        gitmoji.code.toLowerCase().includes(searchTerm) ||
        gitmoji.description.toLowerCase().includes(searchTerm) ||
        gitmoji.emoji.toLowerCase().includes(searchTerm) ||
        gitmoji.name.toLowerCase().includes(searchTerm),
    )
    setSearchResults(results)
  }, [searchTerm])

  const darkMode = useDarkMode(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Gitmoji is an emoji guide for your commit messages. Aims to be a standardization cheat sheet for using emojis on GitHub's commit messages."
        />
      </Head>

      <main className={styles.main}>
        <Link href="/" passHref={true}>
          <Button className="Test">Get Started</Button>
        </Link>
        <div className={styles.top_bar}>
          <Search onChange={(value) => setSearchTerm(value)} />
          <button type="button" onClick={darkMode.toggle}>
            ☀
          </button>
        </div>
        <div className={styles.card_grid}>
          {searchResults.map((gitmoji) => (
            <Card gitmoji={gitmoji} key={gitmoji.code} />
          ))}
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json`,
  )
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
    },
  }
}
