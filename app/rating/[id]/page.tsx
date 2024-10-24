'use client'

import { useEffect } from "react";
import Button from '../../components/Button'

const CompanyRating = () => {

    useEffect(() => {
        // сделать запрос в бд по данным
    })

    return (
        <div>
            <h2>
                Поставьте оценку качеству услуг
            </h2>
            <p>Страничка оценки определенной компании по  её id</p>


            <h1>Company name</h1>
            <h3>Address</h3>


            <div>
                <span>star</span>
                <span>star</span>
                <span>star</span>
                <span>star</span>
                <span>star</span>
            </div>
        <textarea placeholder='Оставьте комментарий:'></textarea>
        <Button>Оставить оценку</Button>


        </div>
    )
}

export default CompanyRating;