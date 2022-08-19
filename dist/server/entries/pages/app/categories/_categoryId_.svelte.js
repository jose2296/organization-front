import { c as create_ssr_component, a as subscribe } from "../../../../_app/immutable/chunks/index-bbd1eb37.js";
import { p as page } from "../../../../_app/immutable/chunks/stores-a4f5c812.js";
import "axios";
const _categoryId__svelte_svelte_type_style_lang = "";
const css = {
  code: "ezz-icon.svelte-2rtpgj.svelte-2rtpgj.svelte-2rtpgj{width:20px;display:flex}.goal.svelte-2rtpgj.svelte-2rtpgj.svelte-2rtpgj{padding-left:20px;border-bottom:1px solid black;padding:10px 0}.goal.svelte-2rtpgj .options.svelte-2rtpgj.svelte-2rtpgj{display:flex}.goal.svelte-2rtpgj .options.svelte-2rtpgj>.svelte-2rtpgj:not(:last-child){padding-right:10px}p.svelte-2rtpgj.svelte-2rtpgj.svelte-2rtpgj{margin:0;padding:0}",
  map: null
};
const U5BcategoryIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.categoryId;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${`<p class="${"svelte-2rtpgj"}">Loading...</p>`}

${``}`;
});
export {
  U5BcategoryIdu5D as default
};
