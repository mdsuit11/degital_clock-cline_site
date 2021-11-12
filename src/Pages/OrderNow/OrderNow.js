import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './OrderNow.css'


const OrderNow = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();

  const onSubmit = data => {
    console.log(data)
    fetch('http://localhost:5000/orders', {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=> {
        if(data.insertedId) {
            alert('added successfully');
            reset();
        }
        
       
    })
   
  };
    return (
        <div className='add-service'>
           <h2>Add a new address</h2>
           <h4>And Shipping</h4>
            <form   onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="name" defaultValue={user.displayName} /> <br />
            {/* <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
            <input type="email" {...register("eamil")} placeholder='eamil' defaultValue={user.email} /> <br />
            <input type="number" {...register("phone")} placeholder='phone' /> <br />
            <textarea type="Address" {...register("Address")}cols="10" placeholder='Address'></textarea> <br />
            <input type="number" {...register("zipcode")} placeholder="Zip Code" /> <br />
            
            <input type="submit" />
    </form>
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio mollitia eius excepturi dignissimos tempora dolorum,*/}
        </div>
    );
};

export default OrderNow;

