'use client'
import React, {useEffect, useRef, useState} from 'react';
import { questionsData, Question  } from './EconomyQuestionsText';
import styles from './questions-list.module.css';
import Link from "next/link";

const QuestionsList: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<Question  | null>(null);
    const [isCommentVisible, setIsCommentVisible] = useState(false);

    // Установить первый вопрос как активный при первом рендере
    useEffect(() => {
        const firstQuestion = questionsData[0];
        setActiveQuestion(firstQuestion);
        setIsCommentVisible(true);
    }, []);
    const handleQuestionClick = (question: Question) => {
        if (activeQuestion?.id === question.id) {
            return
        } else {
            setIsCommentVisible(false); // скрываем текущий комментарий
            setTimeout(() => {
                setActiveQuestion(question); // устанавливаем новый вопрос после анимации
                setIsCommentVisible(true); // отображаем новый комментарий
            }, 300);
        }
    };

    return (
        <>
            <h1>Экономический блок вопросов</h1>
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
                            <p>{activeQuestion && activeQuestion.comment}</p>
                            <Link href={'/pages/franchise'}>Back</Link>

                        </div>
                    )}
                </div>
            </div>
        </>

    );
};

export default QuestionsList;
