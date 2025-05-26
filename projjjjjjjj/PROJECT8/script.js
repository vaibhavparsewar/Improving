//!we need to use Typed.js
//!add this in html <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
//!need to use this and use <span class="auto-type"></span>
// const typed = new Typed(".auto-type",{    //?creating object and using html clas
//   strings: ["a","b","c"]

// }

const typed = new Typed(".auto-type", {
  //?auto-type is a class
  strings: ["Developer", "Designer", "Freelance", "Content Creator"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
  cursorChar: "|",
  smartBackspace: true,
});
