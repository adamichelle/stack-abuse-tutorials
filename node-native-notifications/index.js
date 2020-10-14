const notifier = require('node-notifier');
const path = require('path');
const fs = require('fs');
// // String
// notifier.notify('Hello!');
 
// // Object
// notifier.notify({
//   title: 'Greetings',
//   message: 'Hello!'
// });

 
// notifier.notify(
//   {
//     title: 'Salutations!',
//     message: 'Hey there!',
//     icon: path.join(__dirname, 'icon.jpg'),
//     sound: true,
//     wait: true
//   },
//   function (err, response) {
//     console.log(response);
//   }
// );

// const Growl = require('node-notifier').Growl;
 
// var growlNotifier = new Growl({
//   name: 'Growl Name Used', // Defaults as 'Node'
//   host: 'localhost',
//   port: 23053
// });
 
// growlNotifier.notify({
//   title: 'Greetings',
//   message: 'Hello user!',
//   icon: fs.readFileSync(__dirname + '/icon.jpg'),
//   wait: false,
//   sticky: false,
//   label: undefined,
//   priority: undefined
// });

// const WindowsToaster = require('node-notifier').WindowsToaster;
 
// var windowsNotifier = new WindowsToaster({
//   withFallback: false, // Fallback to Growl or Balloons?
//   customPath: undefined // Relative/Absolute path if you want to use your fork of SnoreToast.exe
// });
 
// windowsNotifier.notify(
//   {
//     title: undefined, // String. Required
//     message: undefined, // String. Required if remove is not defined
//     icon: undefined, // String. Absolute path to Icon
//     sound: false, // Bool | String (as defined by http://msdn.microsoft.com/en-us/library/windows/apps/hh761492.aspx)
//     id: undefined, // Number. ID to use for closing notification.
//     appID: undefined, // String. App.ID and app Name. Defaults to no value, causing SnoreToast text to be visible.
//     remove: undefined, // Number. Refer to previously created notification to close.
//     install: undefined // String (path, application, app id).  Creates a shortcut <path> in the start menu which point to the executable <application>, appID used for the notifications.
//   },
//   function (error, response) {
//     console.log(response);
//   }
// );

const WindowsToaster = require('node-notifier').WindowsToaster;
 
var windowsToasterNotifier = new WindowsToaster({
  withFallback: false, // Fallback to Growl or Balloons?
  customPath: undefined // Relative/Absolute path if you want to use your fork of SnoreToast.exe
});
 
windowsToasterNotifier.notify(
  {
    title: "Windows Toaster Notification",
    message: "This is a notification sent from the Windows Toaster Notifier",
    icon:  path.join(__dirname, 'icon.jpg'),
    sound: "SMS",
    id: undefined,
    appID: undefined,
    remove: undefined,
    install: undefined,
    reply: false // Boolean.
  },
  function (error, response) {
    console.log(response);
  }
);
