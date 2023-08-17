import heroies from '../superheroies.json';
import {useState, useEffect} from 'react';


const Cards = (props) => {


    const [order, setOrder] = useState(heroies.superheroes);
    const [shuffledOrder, setShuffledOrder] = useState(heroies.superheroes);

    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    
    const [clickedArray, setClickedArray] = useState([]);

    const shuffle = (card) => {

        console.log('Clicked card => ', card);
        console.log('Clicked Array => ', clickedArray);

        const newArray = [...order];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        //console.log(newArray);
        setShuffledOrder(newArray);

        if (clickedArray.includes(card.id)) {
            console.log('you clicked twice');
            setScore(0);
            setTopScore(score);
            setClickedArray([]);
        } else {
            console.log('you clicked on new card');
            setScore(score + 1);
            setClickedArray((prevCard) => [...prevCard, card.id])
        }

        
    }


    return (
        <>
        <header>
                <div className="header__block">
                    <div className="container">
                        <h1>Superheroes Memory Game</h1>
                        <div className='score__block'>
                            <div className="score">Score: {score}</div>
                            <div className="score__top">Top score:  {topScore}</div>
                        </div>
                    </div>
                </div>
                <div className="points__block">
                        <h3>Get points by clicking on image, but don't click on any more than once!</h3>
                </div>
        </header>

        <div className="row">

            {
                shuffledOrder.map(item => {
                    return (
                        <div className="card" key={item.id} onClick={() => shuffle(item)}>
                            <div className="card__img">
                                <img src={item.image} />
                            </div>
                            <div className="card__desc">
                                <p>Name: {item.name}</p>
                                <p>Occupation: {item.occupation}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}

export default Cards;