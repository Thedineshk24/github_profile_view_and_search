import React from 'react'
import {
    Container
} from "reactstrap"

const Footer = () => {
    return (
        <Container 
            fluid
            tag="footer"
            className="text-white text-center bg-primary text-uppercase fixed-bottom p-3"
        >
            &copy; Made in ❤️ By Dinesh Katariya
        </Container>
    )
}

export default Footer
