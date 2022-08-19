import { c as create_ssr_component, b as add_attribute } from "../../../_app/immutable/chunks/index-bbd1eb37.js";
import "axios";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `${$$result.head += `${$$result.title = `<title>Login</title>`, ""}`, ""}

<h1>Login</h1>

<form><label for="${"email"}">Email</label>
  <input type="${"email"}" name="${"email"}" id="${"email"}"${add_attribute("value", email, 0)}>

  <label for="${"password"}">Password</label>
  <input type="${"password"}" name="${"password"}" id="${"password"}"${add_attribute("value", password, 0)}>

  <button type="${"submit"}">Login</button></form>

<a href="${"/auth/register"}">Register</a>`;
});
export {
  Login as default
};
