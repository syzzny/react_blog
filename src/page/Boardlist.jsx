import React from 'react'
import css from '../page/style.css'
import BoardCard from './BoardCard';

export default function Boardlist({ boardlist }) {
    return (
        <div>
            {
                // 배열을 이용하여 화면에 출력할수있다
                // map(): return 값을 배열로 전달
                // {}안에서 return 값은 화면에 바로 출력된다
            }
            {
                boardlist.map((board)=>(
                    <BoardCard board={board} key={board.id}/>
                ))
            }
        </div>
    )
}
