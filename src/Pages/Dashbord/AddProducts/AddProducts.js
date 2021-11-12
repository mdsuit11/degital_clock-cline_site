import { Divider } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data)
    
    fetch('http://localhost:5000/moreProducts' ,{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        if(data.insertedId) {
            alert('added Your Products successfully');
            reset();
        }
    })
    // .then(res=> res.json())
    // .then(data=> {
    //     console.log(data);
        // if(data.insertedId) {
        //     alert('added Your Products successfully');
        //     reset();
        // }
    // })
  };
    return (
        <div className='add-service add-poducts mb-5'>
            <h2>Add Product</h2>
            <Divider />
            <Divider />
                
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
            {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
            <input type="number" {...register("price")} placeholder='price' /> <br />
            <textarea type="text" {...register("description")}cols="10" placeholder='description'></textarea><br />
            <input {...register("img")} placeholder="img url" /><br />
            
            <input type="submit" />
    </form>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio mollitia eius excepturi dignissimos tempora dolorum,*/}
        </div>
    );
};


export default AddProducts;