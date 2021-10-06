import React,{useState, useEffect} from 'react'
import axios from 'axios'
export default function Details() {
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        setPost(response.data);
				console.log(post);
      });
    }, []);


    const funct = (id) => {
      // console.log(id)
			const newPost = post.map((element)=>{
				if(element.id === id){
					element.completed = true;
				}
				return element
			})
			setPost(newPost)
      
		
    }
    return (
        <div>
            <h1>This has logined :) 👍</h1>
            <div className='data'>
                {post.map((item, index)=>
                    <div className='details' key={index}>
                        <p> <b>UserId = </b>{item.userId}</p>
                        <p> <b>Id = </b>{item.id}</p>
                        {item.completed?
                            <p> <b>Title =</b> <span  id='true'>{item.title}</span></p>:
                            <p> <b>Title =</b> <span onClick={item.completed === false ? () => funct(item.id):null} id='false' >{item.title}</span></p>
                        }
                    </div>)
                }
            </div>
        </div>
    )
}
