import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from '../page/style.css'

import Board from './Board';
import { Link } from 'react-router-dom';

export default function BoardCard({board}) {
    return (
        <div className='boardlist-wrap'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Link to={`/boardlist/${board.id}`}>{board.title}</Link>
                    <Card.Text>
                        {board.date}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
