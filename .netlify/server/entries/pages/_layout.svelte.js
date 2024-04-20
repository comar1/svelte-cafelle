import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
let title = "Cafelle";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="poppins-regular mx-auto text-center md:space-x-6 space-x-0 p-[1rem] flex flex-wrap md:flex-row place-items-end md:justify-center"><a href="/" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2 md:order-1 ml-[13%] sm:ml-0 " data-svelte-h="svelte-qxunme">Orders</a> <a href="/about" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2 md:order-1" data-svelte-h="svelte-asr5dc">About Us</a> <a href="/" class="playfair-display-italic text-[4rem] md:text-[5rem] transition duration-100 opacity-80 underline order-1 sm:pl-0 pl-[15%] sm:pr-[6rem] pr-[30rem] md:pr-0 ">${escape(title)}</a> <a href="/menu" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2" data-svelte-h="svelte-ws4sy1">Menu</a> <a href="/shop" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2" data-svelte-h="svelte-em4k71">Shop</a></nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
