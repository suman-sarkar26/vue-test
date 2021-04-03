<template>
    <div class="row ">
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link  
                class="nav-link text-white" 
                :to="{'name':'blog', params:{id:propsData.id}}" @click="blogData()" >
                {{ propsData.title }}
                </router-link>
            </li>                    
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['propsData'],

    methods: {
        async blogData(){
            await axios.get("http://vue-test.gingerbd.com/api/view-blog/"+3);
        }
    }
}
</script>
