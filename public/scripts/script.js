//const button = document.getElementsByTagName('button')



///button.addEventListener('click', newPost)
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts()
})

function updatePosts(){
    
    fetch("http://192.168.1.5:5000/api/all").then(res => {
        return res.json()
    }).then(json=>{

        let postElements = ''

        let posts = JSON.parse(json)
        posts.forEach((post)=>{
            let postElement =  
            `
        <div id = ${post.id} class=" card my-3 border-3">

            <div class="card-header">
                <h4 class="card-title">${post.title}</h4>
            </div>

            <div class="card-body">
                <div class="card-text"> ${post.description} 
                </div>
           </div>
        </div>
        `
        postElements += postElement
        })
        document.getElementById("posts").innerHTML = postElements
    })

    

}

function newPost(){
    let id = document.getElementById("id").value
    let title = document.getElementById('title').value
    let description =  document.getElementById('desc').value
    
    let post = { id, title, description}

    const options = { 
        method:"POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.1.5:5000/api/new",options).then(res =>{console.log(res)
    updatePosts()
    posts.push(post)
    
})
}