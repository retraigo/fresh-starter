/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Layout from "../layouts/DefaultLayout.tsx";

export default function Home() {
  return (
    <Layout>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <img
          src="/logo.svg"
          class={tw`w-8`}
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </Layout>
  );
}