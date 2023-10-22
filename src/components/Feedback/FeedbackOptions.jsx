import React from 'react';
import { ButtonDiv, ButtonBack } from './FeedbackOptions.styled';

const FeedbackOptions = ({options, btnFeedBack }) => {
    return (
        <ButtonDiv>
            {options.map(option => (
                <ButtonBack 
                key={option}
                type='button'
                onClick={() => btnFeedBack(option)}
                >
                    {option}
                </ButtonBack>
            ))}
        </ButtonDiv>
    )

}
export default FeedbackOptions;