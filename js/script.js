const { createApp } = Vue;
createApp({
    data(){
        return{
        tasks:[],
        
        newTask:{
            text:'',
            done: false
            },
        userTask:'Scrivi la tua task'
        }
        console.log(newTask)
    },
    
    methods:{
    newTask(){
        this.newTask.text = this.userTask.trim()
    },
    
    },
}).mount('#app')