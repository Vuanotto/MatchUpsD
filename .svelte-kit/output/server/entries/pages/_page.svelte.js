import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-d27yne_START -->${$$result.title = `<title>Top Cut Explorer</title>`, ""}<meta property="${"og:title"}" content="${"Top Cut Explorer"}"><meta property="${"og:url"}" content="${"https://cut-explorer.stalruth.dev/"}"><meta property="${"og:description"}" content="${"Fine grained analytical tool for VGC Top Cut teams."}"><meta name="${"description"}" content="${"Fine grained analytical tool for VGC Top Cut teams."}"><!-- HEAD_svelte-d27yne_END -->`, ""}

<h1>VGC Top Cut Explorer</h1>
<details open><summary>Regulation D (1-Jul to 30-Sep-2023)</summary>
  <ul><li><a href="${"reg-d"}">Regulation D</a></li></ul></details>`;
});
export {
  Page as default
};
