

const Statistics = ({state : {good, neutral, bad}, total, persentage}) =>{
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