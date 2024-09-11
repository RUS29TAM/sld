'use client'
import React, {ReactNode, useState} from 'react';
import styles from './franchise.module.css'
import Modal from '@/app/components/modal/modal';
import {MdCurrencyRuble, MdOutlineStarBorderPurple500, MdSupportAgent} from 'react-icons/md';
import {GoLaw} from 'react-icons/go';
import {FaRegHandshake} from 'react-icons/fa6';
import Link from "next/link";
import {useTheme} from "@/app/ThemeContext";

const Page = () => {
    const {setSelectedTopic} = useTheme();
    const [openPopup, setOpenPopup] = useState(false);
    const [popupContent, setPopupContent] = useState<string | null | ReactNode>(null);

    const handleClickNum = (content: ReactNode, topic: string) => {
        setPopupContent(content);
        setOpenPopup(true)
        setSelectedTopic(topic);  // Сохраняем выбранную тему в контексте
    };

    return (
        <div className={styles.container}>
            <div className={styles.timelineContainer}>
                {/*general timeline point*/}
                <div className={styles.timelinePoint}
                     onClick={() => handleClickNum(
                         <div className={styles.description}>
                             <p>
                                 Вам будет предоставлена возможность оценить как качественные, так и количественные
                                 аспекты франчайзера, выявить риски сотрудничества с данной компанией и оценить,
                                 насколько она серьезно подходит к развитию сети и выбору партнеров.
                             </p>
                             <Link className={styles.link} href={'/pages/questions-list'}>
                                 Перейти к ознакомлению
                             </Link>
                         </div>, ('general'))}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>1</i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><MdOutlineStarBorderPurple500/></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Вопросы общего характера</div>
                        </div>
                    </div>
                </div>

                {/*economy timeline point*/}
                <div className={styles.timelinePoint}
                     onClick={() => handleClickNum(
                         <div className={styles.description}>
                             <p>Блок &quot;Экономических&quot; вопросов поможет вам оценить ваши собственные ресурсы,
                                 тщательно
                                 спланировать бюджет на открытие, рассчитать ожидаемую прибыль и предвидеть необходимые
                                 дополнительные инвестиции. Часто бывает, что франчайзеры занижают общую сумму,
                                 необходимую для старта, или утаивают определенные платежи. Наша цель - узнать обо всем
                                 этом до принятия решения.</p>
                             <Link className={styles.link} href={'/pages/questions-list'}>
                                 Перейти к ознакомлению
                             </Link>
                         </div>, ('economy'))}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>2</i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><MdCurrencyRuble/></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Экономический блок вопросов</div>
                        </div>
                    </div>
                </div>

                {/*law timeline point */}
                <div className={styles.timelinePoint}
                     onClick={() => handleClickNum(
                         <div className={styles.description}>
                             <p>
                                 В процессе переговоров франчайзер может высказывать различные обещания, но ключевое
                                 внимание следует уделить содержанию договора и его положениям. Чем более
                                 детализированным будет договор, тем меньше шансов на внезапные действия франчайзера и
                                 негативные последствия. Идеальный договор франчайзинга составляется обширно, содержа
                                 подробную информацию о каждом этапе сотрудничества и обязанностях сторон во всех
                                 аспектах. Обычно такой договор состоит из не менее чем 20 страниц, отражая все аспекты
                                 сотрудничества.
                             </p>
                             <Link className={styles.link} href={'/pages/questions-list'}>
                                 Перейти к ознакомлению
                             </Link>
                         </div>, ('law'))}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>3</i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><GoLaw/></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Юридические касающиеся юридических аспектов</div>
                        </div>
                    </div>
                </div>

                {/*support timeline point*/}
                <div className={styles.timelinePoint}
                     onClick={() => handleClickNum(
                         <div className={styles.description}>
                             <p>
                                 Способ, которым франчайзер реагирует на ваши запросы, отражает его отношение к
                                 партнерам и готовность помогать в начальной стадии вашего бизнеса.
                             </p>
                             <Link className={styles.link} href={'/pages/questions-list'}>
                                 Перейти к ознакомлению
                             </Link>
                         </div>, ('support'))}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>4</i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><MdSupportAgent/></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Вопросы относящиеся к поддержке франчайзи</div>
                        </div>
                    </div>
                </div>

                {/*partnership timeline point*/}
                <div className={styles.timelinePoint}
                     onClick={() => handleClickNum(
                         <div className={styles.description}>
                             <p>
                                 Важно быть подготовленным к различным сценариям и понимать границы в рамках соглашения
                                 с франчайзером. Необходимо осознавать, на что у него есть право согласно договору, а
                                 что может быть отклонено. Также важно осознавать, какие аспекты бизнеса контролирует
                                 франчайзер и за какие нарушения он может наложить штрафы или даже прекратить
                                 сотрудничество по франшизе.
                             </p>
                             <Link className={styles.link} href={'/pages/questions-list'}>
                                 Перейти к ознакомлению
                             </Link>
                         </div>, ('partnership'))}>
                    <i className={`${styles.faSolid} ${styles.faIcons}`}>5</i>
                    <div className={styles.popup}>
                        <div className={styles.popupNumber}><FaRegHandshake/></div>
                        <div className={styles.popupDetails}>
                            <div className={styles.popupTitle}>Вопросы партнерских взаимоотношений</div>
                        </div>
                    </div>
                </div>
            </div>
            {openPopup && <Modal setOpen={setOpenPopup}>{popupContent}</Modal>}
        </div>
    );
};

export default Page;
