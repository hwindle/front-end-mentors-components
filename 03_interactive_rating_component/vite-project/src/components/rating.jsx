import { useState } from 'react';

function Rating() {
  const initialRatingText =
    'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!';

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ratingNum, setRatingNum] = useState(0);

  const handleSubmit = () => {
    setIsSubmitted(true);
    // get ratingNum
    console.log(ratingNum);
    console.log(isSubmitted);
  };

  return (
    !isSubmitted ?
    <div className="card">
      <header className="logo"></header>
      <h3>How did we do?</h3>
      <p className="rating-text">
        {initialRatingText}
      </p>
      <ul id="rating-scale">
        <li key={1} onClick={() => setRatingNum(1)}>
          1
        </li>
        <li key={2} onClick={() => setRatingNum(2)}>
          2
        </li>
        <li key={3} onClick={() => setRatingNum(3)}>
          3
        </li>
        <li key={4} onClick={() => setRatingNum(4)}>
          4
        </li>
        <li key={5} onClick={() => setRatingNum(5)}>
          5
        </li>
      </ul>
      <button className="submit-rating" onClick={() => handleSubmit()} type='submit'>
        Submit
      </button>
    </div>
      : 
      <div className="card">
        <img className='success-img' />
        <p className='score-selection'>You selected {ratingNum} out of 5</p>
        <p className='thankyou'>Thank you!</p>
        <p className='thanks-description'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
  );
}

export default Rating;
