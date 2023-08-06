import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { Icons } from "@pkmn/img";
const PokemonSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pokemonList = [] } = $$props;
  let { pokemon = "" } = $$props;
  if ($$props.pokemonList === void 0 && $$bindings.pokemonList && pokemonList !== void 0)
    $$bindings.pokemonList(pokemonList);
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  return `<select aria-label="${"Pokémon:"}"><option value="${""}" disabled selected>Select a Pokémon</option>${each(pokemonList, (pokemon2) => {
    return `<option${add_attribute("value", pokemon2.name, 0)}>${escape(pokemon2.name)} (${escape(pokemon2.count)})</option>`;
  })}</select>`;
});
const Detail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let queryItems;
  let sortedItems;
  let { title = "" } = $$props;
  let { changeHandler = () => {
  } } = $$props;
  let { items = {} } = $$props;
  let { query: query2 = [] } = $$props;
  let { total = 1 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.changeHandler === void 0 && $$bindings.changeHandler && changeHandler !== void 0)
    $$bindings.changeHandler(changeHandler);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.query === void 0 && $$bindings.query && query2 !== void 0)
    $$bindings.query(query2);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  queryItems = [query2].flat();
  sortedItems = items.sort((a, b) => {
    if (queryItems.includes(a.name) === queryItems.includes(b.name)) {
      return 0;
    }
    if (queryItems.includes(a.name)) {
      return -1;
    }
    return 1;
  });
  return `<h3>${escape(title)}</h3>
<ul class="${"checklist"}">${each(sortedItems, (item) => {
    return `<li><label><input type="${"checkbox"}"${add_attribute("value", item.name, 0)} ${queryItems.includes(item.name) ? "checked" : ""}>
        ${escape(item.name)} (${escape(item.count)}/${escape(total)})
      </label>
    </li>`;
  })}</ul>`;
});
const ReportView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function getCheckHandler(queryType) {
    return (e) => {
      if (!query2[queryType]) {
        query2[queryType] = /* @__PURE__ */ new Map();
      }
      if (e.target.checked) {
        query2[queryType] = query2[queryType].set(e.target.value, true);
      } else {
        query2[queryType].delete(e.target.value);
        query2[queryType] = query2[queryType];
      }
    };
  }
  let { query: query2 = {} } = $$props;
  let { results = {} } = $$props;
  if ($$props.query === void 0 && $$bindings.query && query2 !== void 0)
    $$bindings.query(query2);
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  return `<h2>${escape(results.species[0].name)}</h2>

<div class="${"report"}"><div>${validate_component(Detail, "Detail").$$render(
    $$result,
    {
      title: "Tera Types",
      changeHandler: getCheckHandler("teraType"),
      items: results.teraType,
      query: query2.teraType,
      total: results.total
    },
    {},
    {}
  )}</div>

  <div>${validate_component(Detail, "Detail").$$render(
    $$result,
    {
      title: "Abilities",
      changeHandler: getCheckHandler("ability"),
      items: results.ability,
      query: query2.ability,
      total: results.total
    },
    {},
    {}
  )}</div>

  <div>${validate_component(Detail, "Detail").$$render(
    $$result,
    {
      title: "Items",
      changeHandler: getCheckHandler("item"),
      items: results.item,
      query: query2.item,
      total: results.total
    },
    {},
    {}
  )}</div>

  <div>${validate_component(Detail, "Detail").$$render(
    $$result,
    {
      title: "Moves",
      changeHandler: getCheckHandler("moves"),
      items: results.moves,
      query: query2.moves,
      total: results.total
    },
    {},
    {}
  )}</div>

  <div>${validate_component(Detail, "Detail").$$render(
    $$result,
    {
      title: "Teammates",
      changeHandler: getCheckHandler("teammates"),
      items: results.teammates,
      query: query2.teammates,
      total: results.total
    },
    {},
    {}
  )}</div></div>`;
});
function getPresentItems(queryMap) {
  if (!queryMap) {
    return [];
  }
  const results = [];
  for (let [item, present] of queryMap.entries()) {
    if (present) {
      results.push(item);
    }
  }
  return results.sort();
}
function getListingName(player) {
  return `${player.name}`;
}
const ResultsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isExpandable;
  let species;
  let teammates;
  let { protocol = "" } = $$props;
  let { hostname = "" } = $$props;
  let { port = "" } = $$props;
  let { players = {} } = $$props;
  let { query: query2 = {} } = $$props;
  const domain = port ? `${hostname}:${port}` : hostname;
  function getTeamDisplay(team, query3) {
    const display = [{}, {}, {}, {}, {}, {}];
    (team ?? []).forEach((el, i) => {
      display[i] = el;
    });
    display.sort((a, b) => {
      if (!a.species) {
        return 1;
      }
      if (!b.species) {
        return -1;
      }
      if (a.species === species) {
        return -1;
      }
      if (b.species === species) {
        return 1;
      }
      return teammates.indexOf(b.species) - teammates.indexOf(a.species);
    });
    return display;
  }
  if ($$props.protocol === void 0 && $$bindings.protocol && protocol !== void 0)
    $$bindings.protocol(protocol);
  if ($$props.hostname === void 0 && $$bindings.hostname && hostname !== void 0)
    $$bindings.hostname(hostname);
  if ($$props.port === void 0 && $$bindings.port && port !== void 0)
    $$bindings.port(port);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  if ($$props.query === void 0 && $$bindings.query && query2 !== void 0)
    $$bindings.query(query2);
  isExpandable = players.length > 16;
  species = getPresentItems(query2.species)[0] ?? void 0;
  teammates = getPresentItems(query2.teammates).reverse();
  return `<h2>Teams</h2>

<div class="${"teamlist"}">${each(players.slice(0, 16), (player) => {
    return `<p>${player.paste ? `<a${add_attribute("href", player.paste, 0)}>${escape(getListingName(player))}</a>` : `<b>${escape(getListingName(player))}</b>`}</p>
    <p>${each(getTeamDisplay(player.team), (set) => {
      return `<span${add_attribute("title", set.species ?? "No Data", 0)}${add_attribute("style", Icons.getPokemon(set.species ?? "No Data", { protocol, domain }).style, 0)}></span>`;
    })}
    </p>`;
  })}</div>

${isExpandable ? `<button class="${"secondary show-all"}">Show all teams</button>` : ``}`;
});
function collationSorter(a, b) {
  if (a.count < b.count) {
    return 1;
  }
  if (b.count < a.count) {
    return -1;
  }
  if (a.name < b.name) {
    return -1;
  }
  if (b.name < a.name) {
    return 1;
  }
  return 0;
}
function collate(array) {
  const set = new Set(array);
  const results = [];
  for (let item of set) {
    results.push({
      name: item,
      count: array.filter((el) => el === item).length
    });
  }
  return results.sort(collationSorter);
}
function subtractCollations(a, b) {
  const result = /* @__PURE__ */ new Map();
  for (const item of a) {
    result.set(item.name, item.count);
  }
  for (const item of b) {
    const newCount = (result.get(item.name) ?? 0) - item.count;
    if (newCount) {
      result.set(item.name, newCount);
    } else {
      result.delete(item.name);
    }
  }
  return [...result].map(([k, v]) => ({ "name": k, "count": v })).sort(collationSorter);
}
function getPokemonList(data) {
  return collate(data.map(({ team }) => (team ?? []).map((set) => set.species)).flat());
}
function matchSet(set, team, { species, item, ability, teraType, moves, teammates }) {
  function matchOne(queryValues, setValue) {
    for (const [key, value] of queryValues) {
      if (setValue === key !== value) {
        return false;
      }
    }
    return true;
  }
  function matchAll(queryValues, setValues) {
    for (const [key, value] of queryValues) {
      if (setValues.includes(key) !== value) {
        return false;
      }
    }
    return true;
  }
  if (species && !matchOne(species, set.species)) {
    return false;
  }
  if (item && !matchOne(item, set.item)) {
    return false;
  }
  if (ability && !matchOne(ability, set.ability)) {
    return false;
  }
  if (teraType && !matchOne(teraType, set.teraType)) {
    return false;
  }
  if (moves && !matchAll(moves, set.moves)) {
    return false;
  }
  const setTeammates = team.filter((el) => el !== set).map((el) => el.species);
  if (teammates && !matchAll(teammates, setTeammates)) {
    return false;
  }
  return true;
}
function query(data, parameters) {
  const sets = [];
  const players = [];
  data.forEach((player) => {
    if (!player.team) {
      return;
    }
    const matches = player.team.filter((set) => {
      return matchSet(set, player.team, parameters);
    });
    if (matches.length) {
      sets.push(...matches);
      players.push(player);
    }
  });
  return { sets, players };
}
function report(data, queryArgs) {
  const result = query(data, queryArgs);
  const sets = {
    total: result.sets.length
  };
  ["species", "item", "ability", "teraType", "moves"].forEach((field) => {
    sets[field] = collate(result.sets.map((set) => set[field]).flat());
  });
  sets["teammates"] = subtractCollations(collate(
    result.players.map(
      (player) => player.team.map((mon) => mon.species)
    ).flat()
  ), sets["species"]);
  return { sets, players: result.players };
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let teamList;
  let pokemonList;
  let query2;
  let results;
  let { data } = $$props;
  let { protocol, hostname, port, tournament } = data;
  let pokemon = "";
  let stage = tournament.teams.length;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    teamList = tournament.teams.slice(0, stage);
    pokemonList = getPokemonList(teamList);
    query2 = {
      species: pokemon ? /* @__PURE__ */ new Map([[pokemon, true]]) : void 0
    };
    results = !pokemon ? { players: teamList } : report(teamList, query2);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-uf11oq_START -->${$$result.title = `<title>Team Explorer: ${escape(tournament.name)}</title>`, ""}<meta property="${"og:title"}" content="${"Top Cut Explorer: " + escape(tournament.name, true)}"><meta property="${"og:url"}" content="${"https://cut-explorer.stalruth.dev/"}"><meta property="${"og:description"}" content="${"Fine grained analytical tool for the " + escape(tournament.name, true) + " Top Cut teams."}"><meta name="${"description"}" content="${"Fine grained analytical tool for the " + escape(tournament.name, true) + " Top Cut teams."}"><!-- HEAD_svelte-uf11oq_END -->`, ""}

<nav><div><a href="${"/"}">Index</a></div></nav>

<h1>${escape(tournament.name)} Team Explorer</h1>
<div class="${"controlbar"}"><div class="${"pokemon-select"}">${validate_component(PokemonSelector, "PokemonSelector").$$render(
      $$result,
      { pokemonList, pokemon },
      {
        pokemon: ($$value) => {
          pokemon = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    ${pokemon ? `<button class="${"secondary"}">Reset
      </button>` : ``}</div>
  ${tournament.stages ? `<div><label>Filter:
        <select>${each(tournament.stages, (stage2) => {
      return `<option${add_attribute("value", stage2.count ?? tournament.teams.length, 0)}>${escape(stage2.name ? `${stage2.name} (${stage2.count || tournament.teams.length} teams)` : `Top ${stage2.count ?? tournament.teams.length}`)}</option>`;
    })}</select></label></div>` : ``}</div>
${pokemon ? `${validate_component(ReportView, "ReportView").$$render(
      $$result,
      { results: results.sets, query: query2 },
      {
        query: ($$value) => {
          query2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

${validate_component(ResultsList, "ResultsList").$$render(
      $$result,
      {
        players: results.players,
        hostname,
        protocol,
        port,
        query: query2
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
