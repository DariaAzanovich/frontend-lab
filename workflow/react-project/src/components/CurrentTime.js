import React from 'react';

const CurrentTime = () => {
    const [currTime, setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

        return function cleanUp() {
            clearInterval(timer);
        }
    })

    return (
        <div className="App-current-time">
            <p>Time: {currTime}</p>
        </div>
    )
}

export default CurrentTime;