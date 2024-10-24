import { Metadata } from "next";

const metadata: Metadata = {
    title: 'Rating'
}

// interface CompanyType  {
//     id: string;
//     name: string;


// }

export default function Rating() {
    return (
        <>
            <h2>Выберите компанию для оценки: </h2>
            <p>тут будет поиск и список конмпаний для оценки</p>
        </>
    )
}