// script.js

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('typewriter');
  const img = document.getElementById('profileImage');

  const typewriter = new Typewriter(app, {
    loop: false,
    delay: 10,
  });

  typewriter
    .callFunction(() => {
      img.classList.add('visible');
    })
    .typeString(`I am a PhD student at the 
        <a href="https://engineering.yale.edu/academic-study/departments/electrical-and-computer-engineering">Department of ECE</a>, 
        <a href="https://www.yale.edu/">Yale University</a>. I am being advised by <a href="http://dkalogerias.org/">Dionysis Kalogerias</a>. 
        My current research interests are in model-free wireless autonomy and 
        risk-aware reinforcement learning. In a broader sense, I am interested 
        in bilevel stochastic programming emphasizing problem design 
        and analysis.`)
    .start();
});
