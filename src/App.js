
import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Czy można dotykać klocków w celu sprawdzenia czy są luźne?',
			answerOptions: [
				{ answerText: 'Tak', isCorrect: true },
				{ answerText: 'Nie', isCorrect: false },
				{ answerText: 'Nie było tego w zasadach', isCorrect: false },
				{ answerText: 'Jak jest sie frajerem', isCorrect: false },
			],
		},
		{
			questionText: 'Czemu autor tekstu był zirytowany?',
			answerOptions: [
				{ answerText: 'Bo jest frajerem', isCorrect: false },
				{ answerText: 'Bo ludzie nie umieją grać w Jenge', isCorrect: true },
				{ answerText: 'Bo on nie umie grać w Jenge', isCorrect: false },
				{ answerText: 'Bo ktoś ukradł mu wszystkie diaxy na serwie', isCorrect: false },
			],
		},
		{
			questionText: 'Czy gra skończy się po 3 sekundach, tylko dlatego że przez przypadek dotknąłem klocka utrzymującego całą wieżę?',
			answerOptions: [
				{ answerText: 'Nie', isCorrect: true },
				{ answerText: 'Tak', isCorrect: false },
				{ answerText: '>imagine przegrać w Jenge', isCorrect: false },
				{ answerText: 'Teoretycznie da się jeszcze ugrać taką sytuację', isCorrect: false },
			],
		},
		{
			questionText: 'Kim jest przysłowiowa "Ameba umysłowa"?',
			answerOptions: [
				{ answerText: 'Ja', isCorrect: false },
				{ answerText: 'Ty', isCorrect: false },
				{ answerText: 'Autor', isCorrect: false },
				{ answerText: 'Osoba która nie umie grac w Jenge', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className="quiz">
			<div className='text'>
					<h2>Walić ludzi którzy nie umieją grać w Jenge.</h2>
					<h3>"YyYy DoTkNąŁeŚ tEgO kLoCkA tO mUsIsZ gO wZiĄć"
						Wal sie, nie tak gra się w tą gre ty tępa dzido.<br/><br/>
						Cytuje z oficjalnych zasad Jengi:<br/>
						"Dopuszczalne jest próbowanie wyjęcia różnych klocków w trakcie swojego ruchu. Jeśli gracz nie zdecyduje się na wyjęcie danego klocka, ale go poruszył, powinien cofnąć go na swoje miejsce (chyba, że grozi to zawaleniem wieży)."<br/><br/>
						Nigdy nawet nie przeczytałes zadad gry, ty tępy idioto. Co, myślisz że gra sie skończy po 3 sekundach, tylko dlatego że przez przypadek dotknąłem klocka utrzymującego całą wieżę?NIE TY AMEBO UMYSŁOWA. Naucz się czytać piepszony analfabeto.
					</h3>
				</div>
			<div className='app'>
				{showScore ? (
					<div className='score-section'>
						Zdobyłeś {score} punktów z {questions.length}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Pytanie {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}