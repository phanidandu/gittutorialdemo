//Promises code
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const promiseWifeBringsTicket=new Promise((resolve,reject)=>{
  setTimeout(()=>{
     resolve('ticket');
  },3000)
})

const getpopcorn= promiseWifeBringsTicket.then((t)=>{
    console.log('hb lets go in')
    console.log('wf i need popcorn')
    return new Promise((resolve,reject)=>{
      resolve(`${t} popcorn`)   
    })
}) 

const getbutter = getpopcorn.then((t)=>{
    console.log('hb lets go in')
    console.log('wf i need butter')
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn butter`)
    })
})

const getColdDrinks= getbutter.then((t)=>{
     console.log('hb got the butter')
     console.log('wf i need cold drinks')
     return new Promise((resolve,reject)=>{
          resolve(`${t} popcorn butter colddrinks`)
     })
})

getColdDrinks.then((t)=> console.log(t));


console.log('person1 shows ticket');
console.log('person2 shows ticket');

//Using async await code
const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getColdDrinks =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('ColdDrinks'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, ColdDrinks ] =
    await Promise.all([ getPopcorn, getCandy, getColdDrinks  ]);

    console.log(`got ${popcorn}, ${candy}, ${ColdDrinks}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');


async function Postmanager(){
const createPost = (post) => new Promise( (resolve, reject) => {
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
    
    const postcreated= await createPost;
    
    const deletePost = () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if(posts.length > 0){
                    const poppedElement  = posts.pop();
                    resolve(poppedElement);
                } else {
                    reject("ERROR")
                }
            }, 1000)
        })
    }

    const popped= await deletePost;
}
