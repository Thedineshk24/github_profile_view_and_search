import React,{useState,useEffect} from 'react'
import {Card, CardBody} from "reactstrap"
import axios from "axios"
import {toast} from "react-toastify"


const MyCard = () => {
    const [me,setMe] = useState("");
    let name = "Thedineshk24"


    const fetchMyDetails = async () => {
        try{
            const {data} = await axios.get(`https://api.github.com/users/${name}`);
            setMe(data);
            console.log({data})
        }catch(err){
            toast(err.message,{
                type:"error"
            })
        }
    }


    useEffect(() => {
        fetchMyDetails()
    },[me])

    return (
        <Card className="text-center mt-3 mb-4">
            <img src={me.avatar_url} className="img-thumbnail"
            />
            {
                console.log("MY LOGIN : ", me)
            }
            <CardBody>
                <div className="text-primary">name : {me.name}</div>
                <div className="text-primary">location : {me.location}</div>
                <div className="text-primary">bio : {me.bio}</div>
                <div className="text-primary">Avaliable for hire : {me.hireable ? "YES" : "Not Avaliable"}</div>
                <div className="text-primary">company : {me.company}</div>
            </CardBody>
        </Card>
    )
}

export default MyCard
