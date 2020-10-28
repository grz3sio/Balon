import React, { useState } from 'react';
import dip from '../assets/dip.jpg';
const questions = require('./Questions.json');


const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const answer = (ans) => {
        if (ans) {
            setScore(score + 1);
        }
        displayQuestions();
    };

    const displayQuestions = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

	return (
		<div className="quiz">
			<div className='text'>
					<h1>QUIZ: Nie cierpię laptopów gamingowych</h1>
					<p>
                    Dzisiaj, kiedy wszedłem na zajęcia z ekonomii, zobaczyłem coś, czego się boję za każdym razem, gdy zamykam oczy. Ktoś przyniósł na zajęcia nowy laptop do gier. Wózek widłowy, którym go tu przynosił, nadal pracował z tyłu. Zacząłem się pocić, gdy usiadłem i spojrzałem na 700-kilogramową bestię, którą był jego laptop. Wzmocnił już swoje biurko stalowymi belkami nośnymi i był w trakcie poszukiwania gniazdka dla kabla zasilającego grubszego niż udo Amy Schumer. Zacząłem się trząść. Powtarzałem sobie, że wszystko będzie dobrze i nie ma się czym martwić. W jakiś sposób gościu znalazł pieprzone gniazdko. Łzy spływały mi po policzkach, kiedy wysyłałęm ostatnie SMS-y do rodziny, mówiąc, że ją kocham. Nauczyciel rozpoczął wykład, a student włączył laptopa. Kolorowe światła na jego klawiaturze z podświetleniem RGB ożyły niczym nuklearny błysk, a głębokie buczenie wypełniło moje uszy i wstrząsneło moją duszą. Cała miejska sieć energetyczna zgaśła. Klasa zaczęła się trząść, gdy potężnę wiatraki zaczęły się kręcić. W ciągu zaledwie kilku sekund mój świat zmienił się z tętniącego życiem w ciemną, niszczącą ziemię pustkę, w której moje ciało jest rozdzierane przez wichury o prędkości 150 mil na godzinę i jęk chłodzących wentylatorów o mocy 500 decybeli. Kiedy moje ciało w końcu się poddało, zacząłem płakać, gdy moja szkoła i moje miasto zaczęło upadać.
                    </p>
				</div>
                    {showScore ? (
                        window.location.href = "/game"
                    ) : (
                        <div className='quizQuestions'>
                            <div className='question'>
                                <h3>{ questions[currentQuestion].questionText }</h3>
                            </div>
                            <hr/>
                            <div className='answers'>
                                { questions[currentQuestion].answerOptions.map((ans) => (
                                        <button onClick={()=>answer(ans.isCorrect)}>{ans.answerText}</button>
                                )) }
                            </div>
                        </div>
                    )}
		</div>
	);
};

export default Quiz;