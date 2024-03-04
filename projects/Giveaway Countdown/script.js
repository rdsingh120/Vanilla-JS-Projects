const countDownCalc = () => {
    const timeLeft = document.querySelectorAll('.time-left');
    const countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;
    if (difference < 0) {
        clearInterval(setCountDown);
        document.querySelector('.sub-title').textContent = "Session Expired";
        document.querySelector('.sub-title').style.color = "red";
    }

    // in milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const secondsLeft = Math.round((difference % minute) / second);
    const minutesLeft = Math.round((difference % hour) / minute);
    const hoursLeft = Math.round((difference % day) / hour);
    const daysLeft = Math.round(difference / day);
    
    const secs = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
    const mins = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    const hours = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    const days = daysLeft < 10 ? `0${daysLeft}` : daysLeft;

    const timeLeftData = [days, hours, mins, secs];

    for (let i = 0; i < timeLeftData.length; i++) {
        timeLeft[i].textContent = timeLeftData[i];
    }
}

const setCountDown = setInterval( countDownCalc, 1000);