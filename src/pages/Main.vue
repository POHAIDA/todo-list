<template>
    <div >
        <div class="header">
            <h1 style="font-size: 40px; margin: 20px;">CRUD</h1>
            <button class="btn-create" @click="showDialog">Create user</button>
        </div>
        
    
        <my-dialog v-model:show="dialogVisible">

        <form @submit.prevent>
        <div class="btn_close">
            <h4>Create user</h4>
            <button @click="dialogVisible=false">close</button>
        </div>
        <input 
            v-bind:value="name" 
            @input="name = $event.target.value"
            class="input" 
            type="text" 
            placeholder="name user">

        <input 
            v-bind:value="mail" 
            @input ="mail = $event.target.value"
            class="input" 
            type="text" 
            placeholder="Email">
        
        <input 
            v-bind:value="phone" 
            @input ="phone = $event.target.value"
            class="input" 
            type="text" 
            placeholder="phone">

        <button class="btn" @click="createPost">Створити</button>
    </form>
    </my-dialog>
    
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>mail</th>
                    <th>phone</th>
                    <th>event</th>
                    <th>date event</th>
                    <th>action</th>
                </tr>
                
                <tr v-for="post in posts">
                    <td>{{ post.name }}</td>
                    <td>{{ post.mail }}</td>
                    <td>{{ post.phone }}</td>
                    <td>{{ post.event }}</td>
                    <td>{{ post.dateEvent }}</td>
                    <td class="td-button"><router-link to="/users" class="user-btn">User</router-link></td>
                </tr>
            </table>
        </div>
    
    
    </div>
    
</template>

<script>
import myDialog from '@/components/UI/myDialog'

export default{
    components:{
        myDialog
    },
    data(){
        return{
           posts:[],
           name:'', mail:'', phone:'', event:'-', dateEvent:'-',
           dialogVisible:false,
        }
    },

    methods:{
        createPost(){
         const newPost = {
            id:Date.now(),
            name: this.name,
            mail: this.mail,
            phone: this.phone,
            event: this.event,
            dateEvent: this.dateEvent,
            }
            this.posts.push(newPost);
            this.name = '';
            this.mail = '';
            this.phone = '';
            this.dialogVisible=false;
            localStorage.setItem('posts', JSON.stringify(this.posts));
        },
       showDialog(){
        this.dialogVisible = true
       },
       
    },
    mounted() {
        const storedPosts = localStorage.getItem('posts');
        if (storedPosts) {
            this.posts = JSON.parse(storedPosts);
        }
    },
}

</script>

<style>
.header{
display: flex;
justify-content: space-between;
margin-bottom: 100px;
background-color: antiquewhite;
padding: 20px;
border-radius: 10px;
}

.btn-create{
    align-self: center;
    padding: 20px 40px;
    font-size: 20px;
    border-radius: 5px;
}
.btn_close{
    display: flex;
    justify-content: space-between;

}

form{
    display: flex;
    flex-direction: column;
}
.input{
    width: 100%;
    border: 1px solid grey;
    padding: 10px 15px;
    margin-top: 15px;
}


.btn{
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: gray;
    border: 1px solid black;
}

.user-btn{
padding: 5px;
width: 100px;
border-radius: 5px;
}

table{
    width: 70%;
    border-collapse: separate;
    border-spacing: 5px;
    background: rgb(224, 228, 231);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 10px 30px;
    font-size: 20px;
    
}

th{    
    min-width: 100px;
    height: 50px;
    
}
td{
    padding-left: 20px;
    min-width: 100px;
    height: 50px;
    background-color: rgb(206, 199, 212);
}
.td-button{
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

















<!-- 
<template>

</template>

<script>
export default{

}

</script>

<style>

</style> -->