import { c as create_ssr_component } from "../../../_app/immutable/chunks/index-bbd1eb37.js";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
    <h1>App layout</h1>

    <header><nav><a href="${"/app/categories"}">Categories</a>
            <a href="${"/app/lists"}">Lists</a>
            </nav></header>

    ${slots.default ? slots.default({}) : ``}

`;
});
export {
  _layout as default
};
