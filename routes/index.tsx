import { Head, asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

import MadeWithFresh from '../components/MadeWithFresh.tsx';

import Menu from '../islands/Menu.tsx';
import MenuBurger from '../islands/MenuBurger.tsx';


export default function Home() {
  const menuOpen = useSignal(false);
  return (
    <>
      <Head>
        <title>Transfer Learning Podcast</title>
        <link rel="stylesheet" href={asset("/index.css")} />

        <meta charset="utf-8/">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="author" content="Austin Poor"/>
        <meta name="robots" content="index, follow"/>
        
        <title>Austin Poor's Personal Website</title>
        <meta name="description" content="An experimental podcast that covers tech and AI news using generative AI tools like LLMs and text-to-speech created by Austin Poor."/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="The Transfer Learning Podcast Website"/>
        <meta property="og:url" content="https://transferlearningpod.com/">
        <meta property="og:image" content="https://transferlearningpod.com/images/propic-square-md.png"/>
        <meta property="og:description" content="An experimental podcast that covers tech and AI news using generative AI tools like LLMs and text-to-speech created by Austin Poor."/>
        <link rel="canonical" href="https://transferlearningpod.com"/>
        
        <script defer data-domain="transferlearningpod.com" src="https://plausible.io/js/script.js"></script>
          {/* <script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script> */}
      </Head>

      <div>
        <header class="absolute inset-x-0 top-0 z-50">
          <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
              <a href="/" class="-m-1.5 p-1.5">
                <span class="sr-only">The Transfer Learning Podcast</span>
                <img class="h-8 w-auto" src="/robot.svg" alt="A robot icon."/>
              </a>
            </div>
            <MenuBurger open={menuOpen}/>
            <div class="hidden lg:flex lg:gap-x-12">
              <a href="/" class="text-sm font-semibold leading-6 text-gray-900">
                Home
              </a>
              <a href="/episodes" class="text-sm font-semibold leading-6 text-gray-900 pointer-events-none">
                Episodes
              </a>
              <a href="https://austinpoor.com" class="text-sm font-semibold leading-6 text-gray-900">
                About the (Human) Host
              </a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
          </nav>

          {/* Mobile menu, show/hide based on menu open state. */}
          <Menu open={menuOpen} />
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transfer Learning Podcast
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                The Transfer Learning Podcast is an experimental podcast that covers tech and AI news using generative AI tools like LLMs and text-to-speech,
                created by Austin Poor.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://podcasts.apple.com/us/podcast/transfer-learning/id1690467209" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <img src="/podcast.svg" className="w-5 h-5" />
                  <span class="sr-only">Apple Podcasts</span>
                </a>
                <a href="https://open.spotify.com/show/1bZiN5D5IdC4t1ZIZ8SaZu" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <img src="/spotify.svg" className="w-5 h-5" />
                  <span class="sr-only">Spotify</span>
                </a>
                <a href="https://anchor.fm/s/e2e03340/podcast/rss" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <img src="/rss.svg" className="w-5 h-5" />
                  <span class="sr-only">RSS Feed</span>
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
          </div>
        </div>
      </div>

      <MadeWithFresh />
    </>
  );
}
