window.onload = function() {
    Notification.requestPermission();
    setInterval(checkTime, 1000);   
 };
 
 const checkTime = function() {
    let previousMinutes;
    const options = {
        body: "「Game Start」でゲームを始める。1つ前に戻りたい場合は「ホーム画面に戻る」",
        icon: "bell.png"
    };
    return function() {
        const currentTime = new Date();
        const minutes = currentTime.getMinutes();
        if (previousMinutes !== minutes && minutes % 1 === 0) {
            previousMinutes = minutes;
            const notification = new Notification("Check!", options);
        }
    }  
 }();
