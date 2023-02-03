const FeedbackOptions = ({ updateStatistic, options }) => {
  return (
    <>
      {options.map((option) => <button key={option} name={option} onClick={updateStatistic}>{option}</button>)}
    </>
  );
};

export default FeedbackOptions;
