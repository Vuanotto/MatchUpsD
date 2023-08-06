import { c as create_ssr_component } from "../../chunks/index.js";
const mvp = "";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${slots.default ? slots.default({}) : ``}</main>
<footer><details><summary>Credits</summary>
    <dl><dt>Programming and Design</dt><dd><a href="${"https://stalruth.dev"}">Stuart Rutherford</a> (<a href="${"https://github.com/Stalruth/cut-explorer/"}">GitHub</a>)</dd><dt>Team exports</dt><dd><a href="${"https://twitter.com/VGCPastes"}">VGC Pastes</a></dd><dt>Standings</dt><dd><a href="${"https://pokedata.ovh/"}">PokeData</a></dd><dt>Pokémon Set Parsing and Sprites</dt><dd><a href="${"https://github.com/pkmn/ps"}">pkmn/ps</a></dd><dd><a href="${"https://play.pokemonshowdown.com"}">Pokémon Showdown</a></dd><dt>Teamlist Hosting</dt><dd><a href="${"https://pokepast.es/"}">PokePaste</a></dd><dt>Favicon</dt><dd><a href="${"https://github.com/twitter/twemoji"}">Twemoji by Twitter</a></dd></dl></details></footer>`;
});
export {
  Layout as default
};
