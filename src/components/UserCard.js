import React from 'react'
import {Card, CardBody} from "reactstrap"

const UserCard = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} 
                roundedCircle
            />

            <CardBody>
                <div className="text-primary">name : {user.name}</div>
                <div className="text-primary">location : {user.location}</div>
                <div className="text-primary">bio : {user.bio}</div>
                <div className="text-primary">Avaliable for hire : {user.hireable ? "YES" : "Not Avaliable"}</div>
                <div className="text-primary">company : {user.company}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard
