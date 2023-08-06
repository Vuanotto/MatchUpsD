import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      prerender: {
        entries: [
          '/',
          '/reg-d',
        ],
      },
    }),
  }
};

export default config;
