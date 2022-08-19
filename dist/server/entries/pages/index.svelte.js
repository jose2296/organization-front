import { c as create_ssr_component } from "../../_app/immutable/chunks/index-bbd1eb37.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Welcome</title>`, ""}`, ""}

<a href="${"/auth/login"}">Login</a>
<a href="${"/auth/register"}">Regsiter</a>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Routes as default
};
