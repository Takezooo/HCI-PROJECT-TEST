import React, {useState} from 'react';

const freqAskedQuest = [
    {
        question: 'Question 1?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        question: 'Question 2?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        question: 'Question 3?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        question: 'Question 4?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        question: 'Question 5?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    }
]

function Faq()
{
    const [accordion, setActiveAccordion] = useState(-1);
    
    function toggleAccordion(index){
        if (index === accordion){
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    }

    return(
        <div id='faq' className='faq-container'>
            <h1>FAQ</h1>
            <div className='question-answers'>
                {freqAskedQuest.map((item, index) => 
                    <div className='questions-symbol-answers' key={index}>
                        <div className='questions-symbol'>
                            <div className='question'>
                                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            </div>
                            <div className='symbol' onClick={()=> toggleAccordion(index)}>
                                {accordion === index ? (
                                <>
                                    <p className='verticle'>-</p>
                                </>
                                ) : (
                                <>
                                    <p className='verticle'>+</p>
                                </>
                                )}
                                
                            </div>
                        </div>    
                        <div className='answers'>
                            <p className={accordion === index ? "active" : "inactive"}>
                                {item.answer}
                            </p>    
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Faq;