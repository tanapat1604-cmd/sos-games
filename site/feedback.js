'use strict';

const button = document.getElementById('copy');
const report = document.getElementById('report');
const status = document.getElementById('copy-status');

button.hidden = false;
button.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(report.value);
    status.textContent = 'คัดลอกแล้ว วางในช่องของทีมได้เลย';
  } catch {
    document.getElementById('template').open = true;
    report.focus();
    report.select();
    status.textContent = 'เลือกข้อความไว้แล้ว กดคัดลอกจากเบราว์เซอร์ได้เลย';
  }
});
