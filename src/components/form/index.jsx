import React from "react";
import {useForm} from "react-hook-form";
import { request } from "../../config/request";
import { toast } from 'react-toastify';
import {Input} from '../ui/input';



export const Form = ({reFetch}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const submit = (data) => {
        request.post('/messages', data).then((res) => {
            console.log(res.data);
            toast.success("successfully added");
            reFetch();
            reset();
        })
    }
    return(
        <>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center">
            <Input variant="third" placeholder="Task" {...register("name", {required: true})} />
            <button className="mt-[40px] w-[200px] h-[60px] rounded-[20px] bg-black text-white text-xl active:bg-white active:border-2 active:border-black active:text-black">Add</button>
        </form>
        </>
    )
}