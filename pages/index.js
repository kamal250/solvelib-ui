import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Microservice demonstration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 class="text-5xl font-bold mt-0 mb-6">Demonstration of Microservices</h1>
        <div className="grid grid-cols-2 gap-4">
          <section className="px-4 py-8 bg-gray-50">
            <h3 class="text-3xl font-bold mb-8">Books list</h3>
            <div class="flex justify-center">
              <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    px-6
                    py-2
                    border-b border-gray-200
                    w-full
                    rounded-t-lg
                    bg-blue-600
                    text-white
                    cursor-pointer
                  "
                >
                  The current link item
                </a>
                <a
                  href="#!"
                  class="
                    block
                    px-6
                    py-2
                    border-b border-gray-200
                    w-full
                    hover:bg-gray-100 hover:text-gray-500
                    focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600
                    transition
                    duration-500
                    cursor-pointer
                  "
                >
                  A second link item
                </a>
              </div>
            </div>
          </section>
          <section className="px-4 py-8 bg-red-50">
            <h3 class="text-3xl font-bold mb-8">Products list</h3>
            <div class="flex justify-center">
              <div class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                <a
                  href="#!"
                  aria-current="true"
                  class="
                    block
                    px-6
                    py-2
                    border-b border-gray-200
                    w-full
                    rounded-t-lg
                    bg-blue-600
                    text-white
                    cursor-pointer
                  "
                >
                  The current link item
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://solvative.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with Love
        </a>
      </footer>
    </div>
  );
}
