import React,{useContext, useState} from 'react'
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Row,
    Input,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap"

import firebase from "firebase/app"
import "firebase/auth"
import {UserContext} from "../context/UserContext"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"

const Signup = () => {

    const context = useContext(UserContext);

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    // handle signup
    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(res => {
                console.log(res);
                context.setUser({
                    email : res.user.email,
                    uid : res.user.uid
                })
                // if(res.user.uid){
                //     return <Redirect to="/" />
                // }
            })
            .catch(error => {
                console.log(error);
                toast(error.message,{
                    type:"error"
                })
            })
    }


    // handle submit
    const handleSubmit = e => {
        e.preventDefault();
        handleSignUp(); 
    }

    if(context.user?.uid){
        return <Redirect to="/signin" />
    }
    return(
            <Container className='text-center'>
                <Row>
                    <Col lg={6} className='offset-lg-3 mt-5'>
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                <CardHeader className=''>SignUp here</CardHeader>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for='email' sm={3}>
                                            Email
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='provide your email'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                            {/* {
                                                console.log(email)
                                            } */}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for='password' sm={3}>
                                            Password
                                        </Label>
                                        <Col sm={9}>
                                            <Input
                                                type='password'
                                                name='password'
                                                id='password'
                                                placeholder='your password here'
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            {/* {
                                                console.log(password)
                                            } */}
                                        </Col>
                                    </FormGroup>
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit"  block color='primary'>
                                        Sign Up
                                    </Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
}

export default Signup
