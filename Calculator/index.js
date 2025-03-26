
let countdown;
        let timeLeft = 0;
        let isPaused = false;
        
        function startTimer() {
            if (!isPaused) {
                let minutes = parseInt(document.getElementById('minutes').value) || 0;
                let seconds = parseInt(document.getElementById('seconds').value) || 0;
                timeLeft = (minutes * 60) + seconds;
            }
            isPaused = false;
            clearInterval(countdown);
            countdown = setInterval(updateTimer, 1000);
        }
        
        function updateTimer() {
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert('Time is up!');
                return;
            }
            timeLeft--;
            let min = Math.floor(timeLeft / 60);
            let sec = timeLeft % 60;
            document.getElementById('display').innerText = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
        }
        
        function pauseTimer() {
            isPaused = true;
            clearInterval(countdown);
        }
        
        function resetTimer() {
            clearInterval(countdown);
            document.getElementById('display').innerText = '00:00';
            document.getElementById('minutes').value = '';
            document.getElementById('seconds').value = '';
            timeLeft = 0;
            isPaused = false;
        }