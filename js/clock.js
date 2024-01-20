const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // get~는 number이기 때문에 String으로 변환
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// 첫번째 : 함수명, 두 번째 : 호출되는 함수 간격을 몇 ms로 할지, 매초 반복시켜줌
