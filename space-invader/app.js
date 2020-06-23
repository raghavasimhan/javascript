document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const shooter = document.querySelector(".shooter");
  let shooterIndex = 195;
  const bullets = [];
  let invaders = 0;

  document.addEventListener("keyup", control);

  squares[shooterIndex].classList.add("shooter");

  function control(e) {
    if (e.keyCode === 38) {
      setTimeout(fireBullet, 200);
    }
    if (e.keyCode === 37 && shooterIndex > 195) {
      squares[shooterIndex].classList.remove("shooter");
      shooterIndex--;
      squares[shooterIndex].classList.add("shooter");
    }
    if (e.keyCode === 39 && shooterIndex < 209) {
      squares[shooterIndex].classList.remove("shooter");
      shooterIndex++;
      squares[shooterIndex].classList.add("shooter");
    }
  }

  function fireBullet(val = shooterIndex - 15) {
    if (val > -15) {
      setTimeout(() => {
        if (val < 180) {
          squares[val + 15].classList.remove("shooter");
        }
        if (val > 0 && squares[val].classList.contains("invader")) {
          squares[val].classList.remove("invader");
          squares[val].classList.remove("shooter");
        } else {
          val > 0 && squares[val].classList.add("shooter");
          fireBullet(val - 15);
        }
      }, 200);
    } else {
      squares[val + 30].classList.remove("shooter");
    }
  }

  setInterval(() => {
    if (invaders > 0 && invaders < 190) {
      for (let i = invaders - 16; i >= 0; i--) {
        squares[i].classList.remove("invader");
      }
    }
    if (invaders < 190) {
      for (let i = invaders; i < invaders + 15; i++) {
        squares[i].classList.add("invader");
      }
      invaders += 15;
    }
  }, 2000);
});
