import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import css from '../page/style.css'
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setUser }) {
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    // login 메소드
    const loginUser = (e) =>{
        e.preventDefault()

        // 지금은 초기값이 null이기 때문에 user 값을 가져오지 않음
        // 초기값에 속성이 정해져있으면 ...user를 통해서 들고와야함
        setUser({name:name})
        // >> 나중에 구글 로그인으로 진행할 예정
        navigate('/');
    }

    return (
        <div className='login-wrap'>
            <Form className='login-form' onSubmit={loginUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        onChange={(e)=>{setName(e.target.value)}}
                        type="text" 
                        placeholder="Enter Id" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='login-submit'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </div>
            </Form>
        </div>
    )
}
