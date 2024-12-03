import "./css/Confetti.css"

const Confetti = ({winnerEmoji}) => {

    const confettiElements = Array.from({ length: 16 }, (_, index) => (
        <h1 key={index} className={`confetti con-${index + 1}`}>{winnerEmoji}</h1>
    ));

    return (
        <>
            {confettiElements}
        </>
    );
}

export default Confetti;