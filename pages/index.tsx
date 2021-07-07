import Head from "next/head";

type HomePageProps = {
  html: string;
  css: string;
};

export async function getStaticProps() {
  const data = require("../data/wbw.json");
  return {
    props: {
      html: data.html,
      css: data.css,
    },
  };
}

export default function HomePage(props: HomePageProps) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: props.css }} />
      </Head>

      <main>
        <header>
          {/* <Image src={hero} alt="Warga Bantu Warga" /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://firebase-kanvas.imgix.net/warga_bantu_warga/hero_banner.png?auto=format,compress,enhance&fm=pjpg&cs=tinysrgb&fit=scale"
            alt="Warga Bantu Warga"
            height="291"
            width="650"
            style={{ maxWidth: 650, height: "auto", width: "100%" }}
          />
        </header>
        <article dangerouslySetInnerHTML={{ __html: props.html }}></article>
      </main>
    </>
  );
}
