document.querySelectorAll('.wizard').forEach(wizard => {
  const panels = wizard.querySelectorAll('.wizard-step');
  const dots = wizard.querySelectorAll('.wizard-progress .dot');
  const bars = wizard.querySelectorAll('.wizard-progress .bar');
  function show(step){
    panels.forEach(p => { p.hidden = Number(p.dataset.stepPanel) !== step; });
    dots.forEach(d => {
      const s = Number(d.dataset.stepDot);
      d.classList.toggle('active', s === step);
      d.classList.toggle('done', s < step);
    });
    bars.forEach((b, i) => b.classList.toggle('done', i < step - 1));
  }
  wizard.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', () => show(Number(btn.dataset.next))));
  wizard.querySelectorAll('[data-back]').forEach(btn => btn.addEventListener('click', () => show(Number(btn.dataset.back))));
  show(1);
});
