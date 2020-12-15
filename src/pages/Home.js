import React, { useState, useContext, useEffect } from "react";
import axios from "axios";


import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
  } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import MyCard from "../components/MyCard";

import "../App.css";

const Home = () => {
    const context = useContext(UserContext);
    const [query, setQuery] = useState('');
    const [user, setUser] = useState(null);

    const fetchDetails = async () => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${query}`);
            setUser(data);
            console.log({data});
        } catch (error) {
            toast(error.message, {
                type: "error"
            })
        }
    }
 

    if(!context.user?.uid){
        toast("sign in to search for other users",{
            type:"info"
        })
        return <Redirect to="/signin" />
    }

    return (
        <Container className="App">
          <Row className=" mt-3">
            <Col md="4">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Please provide the username"
                />
                <InputGroupAddon addonType="append">
                  <Button onClick={fetchDetails} color="primary">Fetch User</Button>
                </InputGroupAddon>
              </InputGroup>
              {
                  user ? <UserCard user={user} /> : <MyCard />
              }
            </Col>
            <Col md="8">
                {
                    user ? <Repos repos_url={user.repos_url} /> : null
                }
            </Col>
          </Row>
        </Container>
      );
}

export default Home