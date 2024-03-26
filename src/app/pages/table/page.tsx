'use client'
import React from 'react';
import './table.css'

const Page = () => {
    return (
        <div className="container">
            <table className="social-contract-table">
                <thead>
                <tr>
                    <th>Цели социального контракта</th>
                    <th>Размер выплат</th>
                    <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr className="row">
                    <td>Поиск работы</td>
                    <td>Выплаты при заключении контракта и три месяца после трудоустройства, стипендия на период
                        обучения, оплачиваемая стажировка
                    </td>
                    <td>Размер выплат зависит от условий контракта</td>
                </tr>
                <tr className="row">
                    <td>Открытие бизнеса</td>
                    <td>До 350 000 руб.</td>
                    <td>Финансовая поддержка для начала бизнеса</td>
                </tr>
                <tr className="row">
                    <td>Развитие подсобного хозяйства</td>
                    <td>До 200 000 руб.</td>
                    <td>Финансовая поддержка для развития подсобного хозяйства</td>
                </tr>
                <tr className="row">
                    <td>Обучение или переобучение</td>
                    <td>До 30 000 руб. на получение навыков предпринимательской деятельности или ведения хозяйства,
                        на освоение новой профессии
                    </td>
                    <td>Финансовая поддержка для обучения или переобучения</td>
                </tr>
                <tr className="row">
                    <td>Преодоление сложной жизненной ситуации</td>
                    <td>Единоразовая или ежемесячная финансовая помощь</td>
                    <td>Финансовая поддержка для преодоления сложной жизненной ситуации</td>
                </tr>
                </tbody>
            </table>
            <p className="contract-description">
                Социальный контракт заключается на срок от 3 до 12 месяцев в зависимости от цели.
            </p>
            <div style={{display: 'flex', flexDirection: 'row',}}>
                <div style={{
                    width: '600px',
                    margin: '20px 0',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}>
                    <h2>Кто может получить единоразовую выплату</h2>
                    <div style={{marginBottom: '20px'}}>
                        <h3>Малоимущие одинокие граждане</h3>
                        <p style={{marginBottom: '10px'}}>Требование: среднедушевой доход за три последних месяца не
                            должен превышать прожиточный минимум по региону.</p>
                        <p>Описание: Размер выплат зависит от условий контракта.</p>
                    </div>
                </div>
                <div style={{
                    width: '600px',
                    margin: '20px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}>
                    <h2>Кто может получить единоразовую выплату</h2>
                    <div style={{marginBottom: '20px'}}>
                        <h3>Оказавшиеся безработными в период введения санкций</h3>
                        <p style={{marginBottom: '10px'}}>Требование: учитывается период потери работы — с 1 марта 2022
                            года; на момент обращения должны иметь статус безработного. Для таких граждан период
                            заключения контракта установлен с 20 марта 2022 года по 31 декабря 2022 года</p>
                        <p>Описание: Финансовая поддержка для начала бизнеса</p>
                    </div>
                </div>
                <div style={{
                    width: '600px',
                    margin: '20px 0',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px'
                }}>
                    <h2>Кто может получить единоразовую выплату</h2>
                    <div style={{marginBottom: '20px'}}>
                        <h3>Малообеспеченные граждане</h3>
                        <p style={{marginBottom: '10px'}}>Требование: среднедушевой доход семьи за три последних месяца
                            не должен превышать прожиточный минимум на душу населения по региону.</p>
                        <p>Описание: Финансовая поддержка для развития подсобного хозяйства</p>
                    </div>
                </div>

            </div>
            <p style={{maxWidth: '600px', margin: '20px 0'}}>
                При оценке материального состояния семьи учитывается имущественная обеспеченность. Критерии
                устанавливаются на уровне регионов и разнятся от субъекта к субъекту. Но если доход у семьи
                небольшой, но при этом она владеет машиной и двумя квартирами, то вряд ли ей будет оказана помощь. В
                будущем оценку имущественной обеспеченности при заключении социального контракта планируют
                осуществлять по аналогии с детскими выплатами.
            </p>
        </div>


    );
};

export default Page;