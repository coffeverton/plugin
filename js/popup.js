// Or create an HTML notification:
var notification = webkitNotifications.createHTMLNotification(
  'popup.html'  // html url - can be relative
);

// Then show the notification.
notification.show();