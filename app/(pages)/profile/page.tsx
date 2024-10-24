import { Metadata } from "next";

const metadata: Metadata = {
    title: 'name'
}

export default function Profile() {
    const rateNum = 4.9;
    return (
        <>
            <h1>
                Имя компании 
            </h1>
            <span>Текущий рейтинг: {rateNum}</span>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Дата</th>
                        <th scope='col'>Оценка</th>
                        <th scope='col'>Комментарий</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope='row'>23.10.2024</td>
                        <td>4</td>
                        <td>норм</td>
                    </tr>
                    <tr>
                        <td scope='row'>23.10.2024</td>
                        <td>5.0</td>
                        <td>Всё кул</td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}
