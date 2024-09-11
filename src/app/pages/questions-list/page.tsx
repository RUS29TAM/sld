'use client'
import React, {useEffect, useState} from 'react';
import { economyQuestionsData, generalQuestionsData, lawQuestionData, supportQuestionsData, partnershipQuestionData, Question  } from '../../../utils/questions-list-data';
import styles from './questions-list.module.css';
import Link from "next/link";
import {useTheme} from "@/app/ThemeContext";

const Page: React.FC = () => {
    const { selectedTopic } = useTheme(); // Получаем выбранную тему из контекста

    const [questionsData, setQuestionsData] = useState<Question[]>(economyQuestionsData); // default data
    const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
    const [isCommentVisible, setIsCommentVisible] = useState(false);

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
            }, 300);
        }
    };

    return (
        <div className={styles.div}>
            <h1 className={`${styles.h1}`}>Экономический блок вопросов</h1>
            <div className={styles.container}>
                {/* Левая часть с вопросами */}
                <div className={styles.questionsList}>
                    {questionsData.map((question) => (
                        <div
                            key={question.id}
                            className={`${styles.questionItem} ${
                                activeQuestion?.id === question.id ? styles.active : ""
                            }`}
                            onClick={() => handleQuestionClick(question)}
                        >
                            Вопрос № {question.id}
                        </div>
                    ))}
                </div>

                {/* Правая часть с комментарием */}
                <div className={`${styles.commentContainer} ${isCommentVisible ? styles.show : styles.hide}`}>
                    {activeQuestion !== null && (
                        <div className={`${styles.commentContent} ${isCommentVisible ? styles.show : styles.hide}`}>
                            <h2>{activeQuestion && activeQuestion.question}</h2>
                            <p style={{fontStyle: 'italic'}}>Комментарий эксперта: </p>

                            <p>{activeQuestion && activeQuestion.comment}</p>
                            <Link className={`${styles.linkBack}`} href={'/pages/franchise'}>Вернуться к выбору тем</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
