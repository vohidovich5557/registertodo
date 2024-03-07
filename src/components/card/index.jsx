import React from "react";
import { request } from "../../config/request";
import { toast } from "react-toastify";




export const Card = ({ title, id, reFetch }) => {

    const deletTodo = () => {
        request.delete(`/messages/${id}`).then((res) => {
            console.log(res);
            toast.success("successfully removed");
            reFetch();
        })
    };

    const editTodo = () => {
        const newMessage = prompt("", name);
        request.put(`/messages/${id}`, { name: newMessage }).then((res) => {
            console.log(res);
            toast.success("successfully edited");
            reFetch();
        })
    }
    return (
        <>
            <div className="flex items-center  mt-[40px] justify-between">
                <h1 className="text-2xl text-black font-extrabold">{title}</h1>
                <div className="flex items-center gap-[20px]">
                    <button onClick={deletTodo} className="w-[110px] h-[40px] bg-gray-800 rounded-[30px] text-white text-xl">Delet</button>
                    <button onClick={editTodo} className="w-[110px] h-[40px] bg-gray-800 rounded-[30px] text-white text-xl">Edit</button>
                </div>
            </div>
        </>
    )
};