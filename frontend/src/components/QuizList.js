import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const res = await axios.get('http://localhost:5001/api/quizzes');
            setQuizzes(res.data);
        };
        fetchQuizzes();
    }, []);

    return (
        <div>
            <h1>Quizzes</h1>
            {quizzes.map(quiz => (
                <div key={quiz._id}>
                    <Link to={`/quiz/${quiz._id}`}>
                        <h2>{quiz.title}</h2>
                    </Link>
                    <p>{quiz.description}</p>
                </div>
            ))}
        </div>
    );
};

export default QuizList;