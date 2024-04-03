const { createApp } = Vue;
createApp({
    data(){
        return{
        tasks:[],
        userTask:''
        }
    },
    
    methods:{
        addTask(){
            const newTask = {};
            newTask.text = this.userTask.trim();
            newTask.done = false;
            this.tasks.push(newTask);
            this.userTask = '';
        },
        isDone(index){
            this.tasks[index].done=true
        },
        deleteTask(index){
            this.tasks.splice(index, 1)
        }
    },
}).mount('#app')