const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Africa,Lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Lilpresh-hub/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝑂𝒃𝒂𝒏𝒂𝒊 𝐼𝒈𝒖𝒓𝒐_𝐿𝒐𝒏𝒆𝒘𝒐𝒍𝒇" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_50_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIU2NORFl6cTFFV2UweHFhRlpINlczSlpFM2tycXlLc1c5OWNRUGVibnBrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEd0VGNEpmNlN4MnhQc3BEUkN6X0dnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFmMTcwYjlkLWQ1ODEtNDI3NS1hYTU4LWU4N2Q4ZjYwN2IwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDIwNSxcbiAgICAgIDY4LFxuICAgICAgMTk4LFxuICAgICAgMjE1LFxuICAgICAgMTM4LFxuICAgICAgMTA2LFxuICAgICAgMjQ1LFxuICAgICAgMTY4LFxuICAgICAgMjM2LFxuICAgICAgMjAwLFxuICAgICAgODMsXG4gICAgICAxNzMsXG4gICAgICAyMCxcbiAgICAgIDczLFxuICAgICAgMTM2LFxuICAgICAgMTIwLFxuICAgICAgMTk5LFxuICAgICAgMjM1LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NCxcbiAgICAgIDE3MyxcbiAgICAgIDIzLFxuICAgICAgMjM1LFxuICAgICAgMjE4LFxuICAgICAgMTAxLFxuICAgICAgMTk4LFxuICAgICAgMjUwLFxuICAgICAgMTA4LFxuICAgICAgMTMzLFxuICAgICAgNzksXG4gICAgICA2NyxcbiAgICAgIDIxNixcbiAgICAgIDIzOCxcbiAgICAgIDE5NCxcbiAgICAgIDQzLFxuICAgICAgMTk2LFxuICAgICAgNDUsXG4gICAgICA5MixcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0VHOE02R0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTI1OTcxNzE6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MzI4OTMyMjc1MDA3ODozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNV0twY2dGRVA2bzJia0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNZWklmcDIwWlZtM2VST1c0bFcyKzBtQStBS3RVVVQ1bFp5T1NnK1lBVFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOWU3Snlxdkx4c25oRDBmSENWamVZRFVnNEFZK1UyK1BwT0lFaFpTSWdsdmNHN0llcXhrZ2FUU1haMGg3bjlOSmJHVlh4TFptTVNPdHloZmlXajcyQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic0tncWwwNG1iYzNCcys4bCtNQ1VaVXBWdWtnMGxEeVFoN2xlUlJ4bVJObFNMSGFKQzVEbXdDSkVxdzBDb1pwNWZGV2pQQkRCVSs1SDloakEvRUFranc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1MjU5NzE3MTozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE2MTM4MjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUNRQUFKTXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ1FBQUpNcy5qc29uIjogIntcImtleURhdGFcIjpcImhtNmJYdEhLSnFnK0lsTExQRUgzbXk1YVVWZXFuWkRqOVVpOFZvRE9oZGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5Mzc3OTc4MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzLDM2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEwODM0MTQ3NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝑂𝒃𝒂𝒏𝒂𝒊 𝐼𝒈𝒖𝒓𝒐_𝐿𝒐𝒏𝒆𝒘𝒐𝒍𝒇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
