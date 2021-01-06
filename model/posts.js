module.exports = {
    
    posts: [
        { id:1, 
        title:"Teste mural",
        description: "este é um teste do mural"},
        {id:2,
        title: "oto teste"}
    ],


    getAll(){
        return this.posts
    },

    newPost(id,title,description){
        this.posts.push({id, title, description})
    }
    
}

