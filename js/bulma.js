// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();


/* RSVP form styling that matches Bulma + your theme */
.rsvp-box{
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 18px 50px rgba(0,0,0,0.28);
  backdrop-filter: blur(8px);
}

.section-dark .rsvp-box .label,
.section-dark .rsvp-box .help,
.section-dark .rsvp-box .input,
.section-dark .rsvp-box .textarea{
  color: rgba(255,255,255,0.92);
}

.section-dark .rsvp-box .input::placeholder,
.section-dark .rsvp-box .textarea::placeholder{
  color: rgba(255,255,255,0.45);
}

.section-dark .rsvp-box .input,
.section-dark .rsvp-box .textarea{
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.18);
}

.section-dark .rsvp-box .input:focus,
.section-dark .rsvp-box .textarea:focus{
  border-color: rgba(255,255,255,0.34);
  box-shadow: 0 0 0 0.125em rgba(197,164,193,0.22); /* matches your theme-color */
}

/* Attendance buttons behave like a toggle */
.rsvp-attendance label.button{
  position: relative;
  overflow: hidden;
}

.rsvp-attendance input[type="radio"]{
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.rsvp-attendance input[type="radio"]:checked + span,
.rsvp-attendance label.button:has(input[type="radio"]:checked) span{
  font-weight: 700;
}

.rsvp-attendance label.button:has(input[type="radio"]:checked){
  background: rgba(197,164,193,0.35);
  border-color: rgba(197,164,193,0.55);
  color: rgba(255,255,255,0.95);
}

/* Stepper layout */
.rsvp-stepper{
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  gap: 10px;
  align-items: center;
}

/* Honeypot hidden */
.rsvp-hp{
  position: absolute !important;
  left: -9999px !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
}

/* Status text */
.rsvp-status{
  margin-top: 10px;
  font-size: 0.95rem;
  color: rgba(255,255,255,0.75);
}