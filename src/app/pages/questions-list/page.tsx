'use client'
import React, {useEffect, useState} from 'react';
import {
    economyQuestionsData,
    generalQuestionsData,
    lawQuestionData,
    supportQuestionsData,
    partnershipQuestionData,
    Question  } from '@/utils/questions-list-data';
import styles from './questions-list.module.css';
import Link from "next/link";
import {useTheme} from "@/app/ThemeContext";
import LoadingLane from "@/app/components/loading-lane/loading-lane";
import {BiGridHorizontal, BiGridVertical, BiUndo} from "react-icons/bi";

const Page: React.FC = () => {
    const { selectedTopic } = useTheme(); // Получаем выбранную тему из контекста
    const { isDarkTheme } = useTheme();

    const [questionsData, setQuestionsData] = useState<Question[]>(economyQuestionsData); // default data
    const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const [view, setView] = useState(false);

    // Загружаем данные на основе выбранной темы
    useEffect(() => {
        if (selectedTopic === 'general') {
            setQuestionsData(generalQuestionsData);
        } else if (selectedTopic === 'economy') {
            setQuestionsData(economyQuestionsData);
        } else if (selectedTopic === 'law') {
            setQuestionsData(lawQuestionData);
        } else if (selectedTopic === 'support') {
            setQuestionsData(supportQuestionsData);
        } else if (selectedTopic === 'partnership') {
            setQuestionsData(partnershipQuestionData);
        }
    }, [selectedTopic]);

    // Установить первый вопрос как активный при первом рендере
    useEffect(() => {
        if (questionsData.length > 0) {
            const firstQuestion = questionsData[0];
            setActiveQuestion(firstQuestion);
            setIsCommentVisible(true);
        }
    }, [questionsData]);

    const handleQuestionClick = (question: Question) => {
        if (activeQuestion?.id === question.id) {
            return;
        } else {
            setIsCommentVisible(false); // скрываем текущий комментарий
            setTimeout(() => {
                setActiveQuestion(question); // устанавливаем новый вопрос после анимации
                setIsCommentVisible(true); // отображаем новый комментарий
            }, 500);
        }
    };

    return (
        <div className={`${styles.div} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
            <LoadingLane/>
            <h1 className={`${styles.h1} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>Перечень вопросов</h1>
            <div className={!view ? ` ${styles.wrapper}` : `${styles.wrapperChange} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                {!view ?
                    <>
                        {/* Левая часть с вопросами */}
                        <div className={!view ? `${styles.questionsList}` : `${styles.questionsListChange} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                            {questionsData.map((question) => (
                                <div
                                    key={question.id}
                                    className={`${styles.questionItem} ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${
                                        activeQuestion?.id === question.id ? styles.active : styles.inActive
                                    }`}
                                    onClick={() => handleQuestionClick(question)}
                                >
                                    {question.id}
                                </div>
                            ))}
                        </div>

                        {/* Правая часть с комментарием */}
                        <div className={view ? `${styles.commentContainer}` : `${styles.commentContainerChange} ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${isCommentVisible ? styles.show : styles.hide}`}>
                            {activeQuestion !== null && (
                                <div className={!view ? `${styles.commentContent}` : `${styles.commentContentChange} ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${isCommentVisible ? styles.show : styles.hide}`}>
                                    <h2>{activeQuestion && activeQuestion.question}</h2>
                                    <p className={`${styles.text} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>Комментарий эксперта: </p>
                                    <p className={`${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>{activeQuestion && activeQuestion.comment}</p>
                                    <div className={`${styles.buttonsWrapper}`}>
                                        <Link title={'назад'} className={`${styles.linkBack} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`} href={'/pages/franchise'}><BiUndo /></Link>
                                        <button title={'сменить вид'} onClick={() => setView(true)} className={`${styles.toggle}`}><BiGridHorizontal /></button>
                                    </div>
                                </div>

                            )}
                        </div>
                    </>
                    :
                        (<div className={!view ? `${styles.questionsList}` : `${styles.questionsListChange} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                            {questionsData.map((question) => (
                                <>
                                <div
                                    key={question.id}
                                    className={`${styles.questionItem} ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${
                                        activeQuestion?.id === question.id ? styles.active : styles.inActive
                                    }`}
                                    onClick={() => handleQuestionClick(question)}
                                >
                                    {question.id}<span>.&nbsp;</span>{question.question}
                                    <div className={!view ? `${styles.accord}`:`${styles.accordChange} ${
                                        activeQuestion?.id === question.id ? styles.active : styles.inActive
                                    }   ${isDarkTheme ? styles.darkTheme : styles.lightTheme} ${isCommentVisible ? styles.show : styles.hide}`}>
                                        <p className={`${styles.text} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>Комментарий эксперта: </p>
                                        <p className={`${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>{activeQuestion?.id === question.id && activeQuestion.comment}</p>
                                    </div>
                                </div>
                                </>
                            ))}
                            <div className={`${styles.buttonsWrapper}`}>
                                <Link title={'назад'} className={`${styles.linkBack} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`} href={'/pages/franchise'}><BiUndo /></Link>
                                <button title={'сменить вид'} onClick={() => setView(false)} className={`${styles.toggle}`}><BiGridVertical /></button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Page;
