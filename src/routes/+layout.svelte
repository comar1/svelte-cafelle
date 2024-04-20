<script lang="ts">
    import "../app.css";
    let title = 'Cafelle';
</script>
<nav
    class=" poppins-regular mx-auto text-center md:space-x-6 space-x-0 p-[1rem] flex flex-wrap md:flex-row place-items-end md:justify-center"
>
    <a href="/" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2 md:order-1 ml-[13%] sm:ml-0 ">Orders</a>
    <a href="/about" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2 md:order-1">About Us</a>
    <a href="/" class="playfair-display-italic text-[4rem] md:text-[5rem] transition duration-100 opacity-80 underline order-1 sm:pl-0 pl-[15%] sm:pr-[6rem] pr-[30rem] md:pr-0 ">{title}</a>
    <a href="/menu" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2">Menu</a>
    <a href="/shop" class="transition duration-100 opacity-80 hover:opacity-100 hover:bg-slate-100 hover:rounded-md p-[0.5rem] order-2">Shop</a>
</nav>
<slot />