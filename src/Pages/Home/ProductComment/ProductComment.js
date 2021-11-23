import React from 'react';
import { useForm } from "react-hook-form";
// import useAuth from '../../../hooks/useAuth';


const ProductComment = () => {
    const { register, handleSubmit, reset } = useForm();
    // const {user} = useAuth();

  const onSubmit = data => {
    console.log(data)
    fetch('https://evening-tor-13329.herokuapp.com/comments', {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.insertedId) {
            alert('added Your Review successfully');
            reset();
        }
    })
   
  };
    return (
        <div className='add-service add-comment'>

           <h2>Add Your Nice Review</h2>
            <form   onSubmit={handleSubmit(onSubmit)}>
            
            {/* <input type="email" {...register("eamil")} placeholder='eamil' defaultValue={user.email} /> <br /> */}
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="your name" /> <br />
            <input type="number" {...register("rating")} placeholder='rating' /> <br />
            <textarea type="text" {...register("Comment")}cols="10" placeholder='type yor comment'></textarea> <br />
          
            
            <input type="submit" />
    </form>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio mollitia eius excepturi dignissimos tempora dolorum,*/}
        </div>
    );
};

export default ProductComment;


