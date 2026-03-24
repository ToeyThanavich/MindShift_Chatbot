function doGet(request){

 var ss = SpreadsheetApp.openByUrl("YOUR_GOOGLE_SHEETS_URL_HERE");  // Link Google Sheet
 var sheet = ss.getSheetByName("YOUR_GOOGLE_SHEETS_TAB"); // Example Sheet 1 

 var lastRow = sheet.getLastRow();
 var id = lastRow; 

 var user_id = request.parameter.user_id || "U" + id;
 var name = request.parameter.name;
 var mood = request.parameter.mood;
 var score = request.parameter.score;
 var comment = request.parameter.comment;

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
 var dateTime = date + ' ' + time;

 sheet.appendRow([id, dateTime, user_id, name, mood, score, comment]);

 var result = {result:"added"};

 return ContentService
   .createTextOutput(JSON.stringify(result))
   .setMimeType(ContentService.MimeType.JSON);
}