import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import css from '../page/style.css'

export default function Board({boardlist}) {
    const navigate = useNavigate();

    // params 값으로 전달할 수 있는 내용은 숫자형과 문자형
    // 값으로 받아오면 문자형으로 들어온다
    const params = useParams();

    // boardlist는 전체 배열의 값
    // 지금 필요한 값: 배열중에서 id의 값이 params.id와 동일한 객체
    // find()메소드를 이용하여 값 가져옴
    const board = boardlist.find((b)=>(b.id === parseInt(params.id)))
    



    /**
     * react 컴포넌트의 실행 순서
     * 1. 컴포넌트안에 있는 순서대로 자바스크립트 실행
     * 2. return을 통해서 화면 출력
     * 3. useEffect() 마운트 할때 자바스크립트 실행
     *  */ 
    // 마운트할때 실행하기 위해 빈 배열로 작성
    useEffect(()=>{
        if(board===undefined){
            navigate('/')
        }
    },[]);

    return (
        <div>
            {
                board && (
                    <div className='boardwrap'>
                        <h1>{board.title}</h1>
                        <div>
                            <span>Id: {board.id}</span>
                            <span>Name: {board.name}</span>
                            <span>date: {board.date}</span>
                        </div>
                        <p>{board.content}</p>
                    </div>
                )
            }
        </div>
    )
}
