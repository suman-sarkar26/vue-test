<template>
    <div>   

        <div class="row content">

            <div class="col col-md-3 col-sm-6 bg-danger text-center">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-none d-lg-block pl-3 pt-2"><img class="img-fluid img-profile mx-auto mb-2" src="../assets/logo.png" alt=""  style="border:none;"/></span>
                </a>
                <ul class="navbar-nav p-5">
                    <li class="nav-item"><a class="nav-link text-white" href="#about">Instructions</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#">BLOG</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#"><hr></a></li>
                    <li class="nav-item">
                        <sidebar class="d-flex justify-content-center" v-for="(data, index) in blogData" :key="index" :propsData="data"/>
                    </li>                    
                </ul>
            </div>

             <div class="col col-md-9 col-sm-6 ">

                <section class="resume-section" id="about">
                        <div class="resume-section-content pt-5 pl-5">
                            <h1 class="mb-0">
                                Vue Test
                                <span class="text-primary">MononSoft</span>
                            </h1>
                            <div class="subheading mt-3">
                                Instructions:                        
                            </div>
                            <p class="lead mb-5">
                            <ul class="fa-ul mb-0">
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Populate Left Menu under BLOG
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Get Detail of Selected Blog and Comments and view in main content area
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Make a Modal for Comment on click New Comment Button
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Receive Commenter Name, Comment and current date time for from Comment Submit
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Create or remove new comment and display
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    Maintain SPA while develop
                                </li>
                            </ul>
                            <div class="subheading mt-5">
                                API's:                        
                            </div>
                            <p class="lead mt-3">
                            <ul class="fa-ul mb-0">
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    ALL-BLOGS [get] ["http://192.168.10.123/vue-test-api/public/api/all-blogs"]
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    LEFT-MENU [get] ["http://192.168.10.123/vue-test-api/public/api/blogs"]
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    VIEW-BLOG [get] ["http://192.168.10.123/vue-test-api/public/api/view-blog/id"]
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    SAVE COMMENT [post] ["http://192.168.10.123/vue-test-api/public/api/post-comment?blog_id=blog_id&comment=comment&comment_datetime=now()&user=user"]
                                </li>
                                <li>
                                    <span class="fa-li"><i class="fas fa-check"></i></span>
                                    DELETE COMMENT [get] ["http://192.168.10.123/vue-test-api/public/api/remove-comment/id"]
                                </li>
                            </ul>
                            </p>
                        </div>
                    </section>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
import Sidebar from '../components/Sidebar.vue';


    export default{
 
        data(){
            return{ 
                blogData:[]
            }
        },

        components: { Sidebar },

        async created(){
            
            const response = await axios.get("http://vue-test.gingerbd.com/api/blogs");
            this.blogData=response.data.blogs;
        }
    }
</script>

<style>
    .content{
        width: 100%;
        height: 100vh;
    }
</style>