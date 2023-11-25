import React, { useState, useEffect } from 'react';
import './Advice.css';
import Button from '../Button/Button';


const Advice = (props) => {
    const [error, setError] = useState(null);
    const[advice, setAdvice] = useState('');



    const generateAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const jsonData = await response.json();
            console.log(jsonData)
            setAdvice(jsonData);
            // Do something with the fetched data
          } catch (err) {
            setError(err.message);
            // Handle errors here or display an error message to the user
          }
    }

    useEffect(() => {
    }, [])

    return (
        <div className='box'>
            <div className='advice w-[80%] md:w-[20%] mx-auto border'>
                {error && <p>An error occurred</p>}
                <div className='advice-body text-center'>
                    {advice ? (
                        <div>
                        <h1>ADVICE #{advice.slip.id}</h1>
                        <p>"{advice.slip.advice}"</p>
                        </div>
                    ) : (
                        <p className='placeholder'>Click below to generate advice..</p>
                    )}
                </div>
                <div className='advice-button'>
                    <Button onClick={generateAdvice}/>
                </div>
            </div>
        </div>
      );
}

export default Advice;