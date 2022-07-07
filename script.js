// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 15; // we can also set the value by textcontent
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 20; //we  can set the value by .value method
// console.log(document.querySelector('.guess').value); // we can also read the value

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// console.log(num);
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❓ No Number';
  } else if (guess === num) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').textContent = num;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== num) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > num ? '📈 Too High!' : '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   else if (guess > num) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '👎 You Lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < num) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '👎 You Lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
