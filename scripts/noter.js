// // noter.js
// self.addEventListener('push', function(event) {
//   const options = {
//       body: event.data ? event.data.text() : 'Você recebeu uma notificação!'
//   };
//   event.waitUntil(
//       self.registration.showNotification('Notificação', options)
//   );
// });