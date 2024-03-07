import React from "react";
import { request } from "../../config/request";
import { Card } from "../../components/card";
import { ToastContainer } from 'react-toastify';
import { Form } from "../../components/form";




export const Home = () => {
    const [data, setData] = React.useState([]);

    const getData = () => {
        request.get("/messages").then((res) => {
            setData(res.data)
        });
    };


    React.useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className=" w-[500px] h-[400px]  border-2 border-gray-900 ml-auto mr-auto translate-y-14 pt-[20px] pb-[ 20px] pl-[20px] pr-[20px] rounded-[20px] shadow-lg shadow-gray-300">
                <Form
                    reFetch={getData}
                />
                <div className="h-[213px] overflow-scroll">
                    {data.map((item) => (
                        <Card
                            title={item.name}
                            id={item.id}
                            reFetch={getData}
                        />
                    ))}
                </div>
            </div>
        </>
    )
};

