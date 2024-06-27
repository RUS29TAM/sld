'use client'
import React from 'react';
import styles from './franchise.module.css'

const Page = () => {

    return (
        <div className={styles.container}>
            <div className={styles.timelineContainer}>
                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>
                        <div className={styles.faIcons}>1</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}>1</div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Общие вопросы</div>
                            Помогут Вам оценить качественные и количественные характеристики франчайзера, риски работы с
                            данной компанией, увидеть, насколько она серьезно подходит к построению сети и выбору
                            партнеров.
                        </div>
                    </div>
                </div>

                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faCopyright}`}>
                        <div className={styles.faIcons}>2</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}>2</div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Экономика</div>
                            &quot;Экономический блок&quot; вопросов поможет Вам оценить собственные ресурсы, грамотно
                            спланировать
                            бюджет открытия, рассчитать прибыль и необходимые дополнительные вливания. Кроме того, часто
                            франчайзеры занижают объем необходимых в открытие средств или не афишируют те или иные
                            платежи. Наша задача - узнать обо всем до принятия решения.
                        </div>
                    </div>
                </div>

                {/*Individual timeline point */}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faBullseye}`}>
                        <div className={styles.faIcons}>3</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}>3</div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Право</div>
                            Время переговоров на словах франчайзер может много всего обещать, но обращать внимание
                            всегда стоит на договор и его пункты. Чем более подробный договор Вы заключаете, тем меньше
                            вероятность внезапных решений франчайзера и негативных последствий. В идеале договор
                            франчайзинга состоит не менее чем из 20 листов и содержит подробную информацию о каждом
                            этапе сотрудничества и обязательствах сторон по всем аспектам.
                        </div>
                    </div>
                </div>

                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faCompass}`}>
                        <div className={styles.faIcons}>4</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}>4</div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Поддержка</div>
                            То, как франчайзер отвечает на Ваши вопросы, показывает его отношение к своим партнерам и
                            готовность помогать на стадии запуска Вашего бизнеса
                        </div>
                    </div>
                </div>

                {/*Individual timeline point*/}
                <div className={styles.timelinePoint}>
                    <i className={`${styles.faSolid} ${styles.faFaceGrinBeamSweat}`}>
                        <div className={styles.faIcons}>5</div>
                    </i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}>5</div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Партнерство</div>
                            Необходимо быть готовым к любым жизненным ситуациям и понимать, на что франчайзер имеет
                            право в рамках договора, а в чем Вы ему можете отказать. И наоборот, что франчайзер может
                            контролировать в Вашем бизнесе и за что он может Вас штрафовать и наказывать, а за что может
                            даже отозвать франшизу.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
