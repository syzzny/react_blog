import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import css from '../page/style.css'

import { Link, NavLink } from 'react-router-dom'

//  props 값을 받아올떄 NavHeader(props)으로 받아올 수 있다
// 필요에 따라서 구조분해를 통해 객체의 값을 바로 받아올수도 있다
export default function NavHeader({user}) {

    return (
        <div>
            <Navbar className='nav' bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href='/'>BLOG</Navbar.Brand>
                        <Nav.Link className='link' href='/'>Home</Nav.Link>
                        <Nav.Link className='link' href='/boardlist'>Boardlist</Nav.Link>

                        {/* user의 값이 있을때 user.name을 출력 */}
                        {
                            user ? <Navbar.Text>{user.name}</Navbar.Text>  
                            : <Nav.Link className='link' href='/loginform'>Login</Nav.Link>
                        }
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}
