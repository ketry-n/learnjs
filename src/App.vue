<script setup>
import { computed, ref } from 'vue';

    let message = ref('Hello Vue'); 
    let isDanger = ref(false);
    let newItem = ref('Kohv');
    let i = 0;
    let items = ref([
        {id: i++, name: 'Suhkur', isDone: true},
        {id: i++, name: 'Sai', isDone: false},
        {id: i++, name: 'Leib', isDone: true},
        {id: i++, name: 'Coca', isDone: false},
        ]);

    function add(){
        if(newItem.value.trim !== ''){
            items.value.push({id: i++, name: 'Coca', isDone: false});
        }
        newItem.value = '';
    }

    let doneItems = computed(() => items.value.filter (item => item.isDone));
    });

</script>

<template>
    <div class="container mt-2">
         <div class="content">
             <button class="button is-primary" @click="message = 'Hello VM24'">Click me!</button>
             <h1>{{ message }}</h1>
             <button class="button" 
                    :class="{'is-danger': isDanger, 'is-warning': !isDanger}"
                    @:click="color = 'is-danger'">Don't click Me</button>
            
            <div class="field has-addons mt-2">
                 <div class="control is-expanded">
                     <input v-model="newItem" @keydown.enter="add" class="input" type="text" placeholder="Find a repository">
                 </div>
                 <div class="control">
                     <button class="button is-info" @click="items.push(newItem)">
                        Add item
                    </button>
                </div>
            </div>
            <h1>{{ newItem.split('').reverse().join('') }}</h1>

            <h1>All Items</h1>
            <ul>
                <li v-for="item in items">
                    {{ item.name }}
                     <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>

                      <h1>Done Items</h1>
            <ul>
                <li v-for="item in doneitems">
                    {{ item.name }}
                     <input type="checkbox" v-model="item.isDone">
                </li>
            </ul>

         </div>
    </div>
</template>