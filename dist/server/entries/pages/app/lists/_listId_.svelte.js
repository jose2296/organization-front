import { c as create_ssr_component, a as subscribe } from "../../../../_app/immutable/chunks/index-bbd1eb37.js";
import { p as page } from "../../../../_app/immutable/chunks/stores-a4f5c812.js";
import "axios";
const _listId__svelte_svelte_type_style_lang = "";
const css = {
  code: ".list-item.svelte-dgbsm9.svelte-dgbsm9{padding-left:20px;border-bottom:1px solid black;padding:10px 0;display:flex}.list-item.svelte-dgbsm9 p.svelte-dgbsm9{width:200px}.list-item.svelte-dgbsm9 input.svelte-dgbsm9{margin-left:20px}p.svelte-dgbsm9.svelte-dgbsm9{margin:0;padding:0}",
  map: null
};
const U5BlistIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.listId;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${`<p class="${"svelte-dgbsm9"}">Loading...</p>`}

${``}`;
});
export {
  U5BlistIdu5D as default
};
