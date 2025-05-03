if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

document.getElementById('notifyBtn').addEventListener('click', async () => {
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    alert('Notification permission denied');
    return;
  }

  setTimeout(() => {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) {
        reg.showNotification('Scheduled Notification', {
          body: 'This notification was shown after 5 seconds!',
          icon: 'icon.png',
          tag: 'demo-push'
        });
      }
    });
  }, 5000);
});
