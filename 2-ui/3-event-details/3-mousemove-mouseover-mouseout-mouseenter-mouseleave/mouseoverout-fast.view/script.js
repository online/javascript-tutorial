 green.onmouseover = green.onmouseout = green.onmousemove = handler;

 function handler(event) {
   var type = event.type;
   while (type < 11) type += ' ';

   log(type + " target=" + event.target.id)
   return false;
 }


 function clearText() {
   text.value = "";
   lastMessage = "";
 }

 var lastMessageTime = 0;
 var lastMessage = "";
 var repeatCounter = 1;

 function log(message) {
   if (lastMessageTime == 0) lastMessageTime = new Date();

   var time = new Date();

   if (time - lastMessageTime > 500) {
     message = '------------------------------\n' + message;
   }

   if (message === lastMessage) {
     repeatCounter++;
     if (repeatCounter == 2) {
       text.value = text.value.trim() + ' x 2\n';
     } else {
       text.value = text.value.slice(0, text.value.lastIndexOf('x') + 1) + repeatCounter + "\n";
     }

   } else {
     repeatCounter = 1;
     text.value += message + "\n";
   }

   text.scrollTop = text.scrollHeight;

   lastMessageTime = time;
   lastMessage = message;
 }