import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { document.documentElement.classList.toggle('dark', localStorage.getItem('theme') !== 'light'); } catch (_) {}`,
          }}
        />
      </Head>
      <body className="bg-slate-50 dark:bg-gray-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
