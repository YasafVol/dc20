import { E as head, F as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>DC20 Character Creator</title>`;
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>`;
  });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
