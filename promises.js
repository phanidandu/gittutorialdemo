/*const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost().then(()=>{
    deletePost().then(()=>{
      console.log('POST2');    
      create3rPost().then(()=>{ 
         deletePost().then(()=>{
            console.log('POST3');    
            deletePost().then(()=>{
                console.log('POST1');
              deletePost().catch((msg)=>{
                  console.log(msg);  
               })   
            })         
         })
      })  
    })
})



const blogs =[];

//Do not touch these functions below at all
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   return new Promise( (resolve, reject) =>{
     setTimeout( () => {   
         if(blogs.length>0){
           const lastelement = blogs.pop();
           resolve(lastelement);
         }else {
           reject('ERROR');
         }
     }, 1000)
   })
}

//Call the function in the right way so that we can get the desired output
create1stBlog().then( ()=> {
    create2ndBlog().then( ()=>{ 
        deleteBlog().then( (del1)=>{
            console.log(del1.title);
             deleteBlog().then( (del2)=>{
                console.log(del2.title);
                 deleteBlog().then(()=>{})
                 .catch((msg)=>{
                    console.log(msg);
                 })
          })
       })
   })
})                 

const posts = [{title: 'POST1'},{title: 'POST2'}];

// Do not touch the following function
function printPost() {
        posts.forEach((post) => {
            console.log(post.title)
        })
}
// Do not touch the following function
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve()
        }, 3000)
    }) 
}
// Do not touch the following function
function create4thPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST4'});
            resolve();
        }, 2000)
    }) 
}
// Complete the following function 
//It should add POST5 to posts array with setTimeout of 1 second
function create5thPost(){
    //should return a promise
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
          posts.push({title: 'POST5'});
          resolve();  
        }, 2000)
    }) 
}

// The following 4 lines need to be fixed too
create3rdPost().then( () => {
     create4thPost().then( () =>{
         create5thPost().then( () =>{
              printPost();
         })     
     })
}) */

const posts = [{title: 'POST1'}];
const user= {
    username:'abc',
    lastactivitytime: '4th jun 23'
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            
            const error =false;

            if(!error){
                resolve()
            } else
            {
                reject('Error');
            }
            
        }, 2000);
    }) 
}

function updateLastUserActivityTime() {
    return new Promise((resolve,reject)=>{
         setTimeout( ()=>{
              user.lastactivitytime=new Date().getTime();
              resolve();
         }, 1000)
    })
}

function userupdatespost(){
    Promise.all([createPost,updateLastUserActivityTime]) 
    .then(()=> )
}
