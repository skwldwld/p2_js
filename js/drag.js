const rect = document.querySelector(".rect");
let lastX = 0;
let lastY = 0;
let startX = 0;
let startY = 0;

rect.addEventListener("mousedown", function (e) {
  e.preventDefault();
  startX = e.clientX; // 처음 시작할 때 좌표값은 변수에 담아줌
  startY = e.clientY;

  rect.classList.add("active"); // 클릭하면 마우스 커서 바꿔줌

  document.addEventListener("mouseup", onRemoveEvent);

  document.addEventListener("mousemove", onMove);
});

function onRemoveEvent() {
  rect.classList.remove("active");
  document.removeEventListener("mouseup", onRemoveEvent);
  document.removeEventListener("mousemove", onMove);
}

function onMove(e) {
  // mousedown + mousemove가 함께 작동할 때 동작해야 함
  // 이벤트 타겟 - 움직이는 객체는 wrap이기때문에 좌표값을 구해서 wrap 객체 속성을 수정
  // mousedown에서 (저장했던 client 좌표값) - (현재 client 좌표값)을 rect 객체 스타일 속성으로 추가
  e.preventDefault();
  lastX = startX - e.clientX;
  lastY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  rect.style.top = `${rect.offsetTop - lastY}px`;
  rect.style.left = `${rect.offsetLeft - lastX}px`;
}
