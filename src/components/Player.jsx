
export default function Player() {
    return (
        <section id="player">
            <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'} </h2>
            <p>
                <input type="text" onChange={handleChange} value={enteredPlayerName} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
