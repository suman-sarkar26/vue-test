<template>
  <div class="bg-dark">
    <div class=" container bg-light">
      <div class="pl-5 bg-light">
        <!-- Blog Section -->
        <div class="row pt-5">

          <div class="col-md-9" v-for="(detail_data,key) in details" :key="key">
            <h4>{{ detail_data.title }}</h4>
            <h6>{{ detail_data.created_by }}</h6>
          </div>

          <div class="col-md-3" v-for="(date_time, date_index) in blogs_data" :key="date_index.id">  
            <span class="text-danger">
              <font-awesome-icon :icon="['fas', 'clock']" class="regular  text-warning"/>
              {{date_time.blog_datetime}} 
            </span>
          </div>
        </div>

        <div class="row pt-3 pb-5">
          <div class="col-md-10" v-for="(details_blog, index) in blogs_data" :key="index">
            <p> {{details_blog.blog_detail}}</p>
          </div>
        </div>   
        
        <!-- Comment Section -->
        <h4>BLOG COMMENTS</h4>
        <hr>
        <div class="row" v-for="(comment_data, index) in blogs_comments" :key="index">

          <div class="col col-md-9 pb-5">
            <h6>
              <font-awesome-icon :icon="['fas', 'user-friends']" class="solid text-primary"/>
              {{ comment_data.user }} 
            </h6>
            <p>{{ comment_data.comment }}</p>
            <font-awesome-icon 
            :icon="['fas', 'trash']" 
            type="button" 
            @click="deleteComment(comment_data.id)" 
            class="solid text-danger"/>
          </div>
          
          <div class="col ">
           <p>
              <font-awesome-icon :icon="['fas', 'clock']" class="regular text-secondary"/>
              {{ comment_data.comment_datetime }}
            </p>
          </div>

        </div>
              <!-- New Comments Section -->

     <div class="row">
        <div class="col col-md-3">
          <form @submit.prevent="submitData()">
          <div class="form-group ">
            <input  class="form-control" type="text" v-model="commentInfo.user" placeholder="user name">
            <textarea class="form-control mt-3" v-model="commentInfo.comment" placeholder="Leave a comment"></textarea>
            <input type="submit" class="btn btn-success mt-3" value="Submit">
          </div>
          </form>
        </div>
      </div>

      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import moment from 'moment';
  export default{
    data(){
      return{
        details:[],
        blogs_data:[],
        blogs_comments:[],
        "commentInfo": {
          // "id":null,
          "blog_id": null,
          "comment_datetime":"",
          "comment":null,
          "user":null
      }
    }
        
       
    },
  methods: {

    async submitData(){
      this.commentInfo.blog_id = this.$route.params.id;
      let date = new Date().toLocaleString();
      this.commentInfo.comment_datetime = moment(date).format('YYYY-MM-DD h:mm:ss'); 

      await axios.post("http://vue-test.gingerbd.com/api/post-comment",this.commentInfo);
      this.showData();
        
    },

    async deleteComment(id){
      await axios.get("http://vue-test.gingerbd.com/api/remove-comment/"+id);
      this.showData();
    },

    async showData(){
      const id = this.$route.params.id;
      let response = await axios.get("http://vue-test.gingerbd.com/api/view-blog/"+id);

      this.details = response.data.blogs;
      this.blogs_data = response.data.blogs[0].all_blogs;
      this.blogs_comments = response.data.blogs[0].all_comments;
    }

  },

  async created(){
    this.showData();
  }
}
</script>
