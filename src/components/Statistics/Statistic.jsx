
//const Statistics = ({state : {good, neutral, bad}, total, persentage})
const Statistics = ({good, neutral, bad, total, persentage}) =>{ //прибираємо state 
    return(
        <div>
        <p>Good: {good}</p>
        <p>Neutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {total}</p>
        <p> Positive feedback : {persentage}</p>
        </div>
    )
};

export default Statistics;