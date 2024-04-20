<script lang="ts">
   import { writable } from "svelte/store";

    // export let posts;

    // console.log(posts);
    let now = new Date();
    // Get the full name of the day
    const dayName = now.toLocaleString('en-US', { weekday: 'long' });

    // Get the full name of the month
    const monthName = now.toLocaleString('en-US', { month: 'long' });

    // Get the day of the month
    const dayOfMonth = now.getDate();

    // Get the year
    const year = now.getFullYear();

    // Combine the parts into a formatted string
    const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}, ${year}`;

    //initialize order
    let order = 
    {
        selected: false,
        amount: 1,
        customer : '',
        product : 'Spanish Latte',
        price : 80,
        status : ['pending', 'done', 'cancelled'],
        statusIndex: 0,
    };
    // Reactive statement to update price based on amount
    $: order.price = order.amount * 80;

    let orders = [];
    $: totalPrice = orders.reduce((acc, order) => acc + (order.amount * order.price), 0);

    // Function to toggle the selected property
    function toggleSelected() {
        order.selected = !order.selected;
    }

    // Function to cycle through order.status
    function cycleStatus() {
        //increments statusIndex until length then goes back to 0
        order.statusIndex = (order.statusIndex < order.status.length - 1) ? order.statusIndex += 1 : 0;
 
    }

    function addOrder() {
        //orders.update((currentOrders) => [...currentOrders, { ...order, statusIndex: 0 }]);
        orders = [...orders, { ...order, statusIndex: 0 }];;
        console.log(orders);
    }

    function deleteOrder(index) {
        orders = [...orders.slice(0, index), ...orders.slice(index + 1)];
    }
</script>

<div class="w-full">
    <!-- <p class="text-center md:ml-8 md:text-right my-2 w-[80%]">A coffee ordering management system</p> -->
    <div class="w-[90%] md:w-[75%] mx-auto md:my-[1.5rem] mb-[1.5rem]">
        <h3 class="text-[1.5rem]">Order list for <i>Spanish Latte</i></h3>
        <p class="">As of {formattedDate}</p>
        <p class=" underline text-red-600">Total: {totalPrice} php</p>
    </div>
    <!-- table -->
    <table class="text-left w-[90%] mx-auto my-3 table-auto md:w-[75%]">
        <tr class="bg-purple text-center h-[2.5rem] text-white ">
            <th class="w-[3rem] hover:bg-purple2 hover:cursor-pointer md:rounded-l-lg hidden md:inline">#</th>
            <th class="w-[2rem] rounded-l-lg md:rounded-none">no.</th>
            <th class="w-1/2">customer</th>
            <th class="w-[5rem]  hidden md:inline-block md:pt-2">product</th>
            <th class="w-[2rem] ">price</th>
            <th class="w-1/4 rounded-r-lg">status</th>
        </tr>
        
        {#each orders as item, index}
        <tr class="h-[2.5rem]">    
            <td class="w-[2rem] text-center hover:cursor-pointer hover:bg-purple-100 hidden md:inline-block" on:click={toggleSelected}>
                <!-- <input type="checkbox" class="hover:cursor-pointer" bind:checked={order.selected}> -->
                {index + 1}
            </td>
            <td class="text-center">
                <input type="number" class="text-center w-[3rem] hover:bg-purple-100 hover:cursor-pointer" bind:value={item.amount}>
            </td>
            <td >
                <input type="text" class="text-center w-full hover:bg-purple-100 hover:cursor-pointer" placeholder="enter customer" bind:value={item.customer}>   
            </td>
            <td class="hidden md:inline-block">
                <input type="text" class="text-center hover:bg-purple-100 hover:cursor-pointer hidden md:inline-block mt-2" value={item.product}>
            </td>
            <td class="text-center hover:bg-purple-100 hover:cursor-pointer"><p>{item.price * item.amount}</p></td>
            <td class="text-center hover:cursor-pointer hover:bg-purple-100 " 
                class:text-yellow-500={item.status[item.statusIndex] === 'pending'} 
                class:text-green-500={item.status[item.statusIndex] === 'done'} 
                class:text-red-500={item.status[item.statusIndex] === 'cancelled'}
                on:click={() => item.statusIndex = (item.statusIndex < item.status.length - 1) ? item.statusIndex += 1 : 0}
                >
                {item.status[item.statusIndex]}
            </td>
            <td>
                <button class=" h-8 w-8 rounded-full  bg-red-600 opacity-75 hover:opacity-100" on:click={() => deleteOrder(index)}>x</button> 
            </td>
        </tr>
        {/each}
        <tr class="opacity-60 h-[3rem] hover:opacity-100">
            <td class="w-[2rem] text-center hover:cursor-pointer hidden md:inline-block" on:click={toggleSelected}>
                <input type="checkbox" class="hover:cursor-pointer" bind:checked={order.selected}>
            </td>
            <td class="text-center">
                <input type="number" class="text-center w-[3rem] hover:bg-purple-100 hover:cursor-pointer" bind:value={order.amount}>
            </td>
            <td >
                <input type="text" class="p-0 text-center hover:bg-purple-100 hover:cursor-pointer w-full mh-full" placeholder="enter customer" bind:value={order.customer}
                on:keydown={(e) => {
                    if (e.key !== 'Enter') return;
                    addOrder();
                    order.customer = '';
                }}
                >   
            </td>
            <td class="hidden md:inline-block hover:bg-purple-100">
                <input type="text" class="text-center  hover:cursor-pointer -mt-1" value={order.product}>
            </td>
            <td class="text-center hover:bg-purple-100 hover:cursor-pointer "><p>{order.price}</p></td>
            <td class="text-center hover:bg-purple-100 hover:cursor-pointer" on:click={cycleStatus}
                class:text-yellow-500={order.status[order.statusIndex] === 'pending'} 
                class:text-green-500={order.status[order.statusIndex] === 'done'} 
                class:text-red-500={order.status[order.statusIndex] === 'cancelled'}
            >
                {order.status[order.statusIndex]}
            </td>
            <td class="text-center hidden md:block">
                <button class=" h-8 w-8 rounded-full mt-2" on:click={addOrder} >+</button> 
            </td>
        </tr>
    </table>
    <div class="">
        <div class="md:hidden bg-purple mx-auto p-1 text-center text-white rounded-lg w-[7rem] h-[2rem] hover:cursor-pointer opacity-90 hover:opacity-100" on:click={addOrder}>+</div>
    </div>
</div>

<style lang="postcss">
 .bg-purple {
    background-color: #564787;
 }
 .bg-purple2 {
    background-color: rgba(134, 110, 211, 0.922) }
</style>