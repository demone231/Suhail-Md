const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94702314166";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_20_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZUU42SVpsRTJVYU5KSXZBUjBqcWJUU0NtWkZhUDVXNmhBOFRiRk5IamFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVaXRaRE42TFQyR2EzS1BDLUZHVHJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4ZDIxMmU5LTVhNDEtNDZjZC1iYjdiLWYzZjMxOWU5MzkxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDU1LFxuICAgICAgODMsXG4gICAgICA5MSxcbiAgICAgIDI4LFxuICAgICAgMjE3LFxuICAgICAgMTgxLFxuICAgICAgODAsXG4gICAgICAyNDAsXG4gICAgICAyNDgsXG4gICAgICAyMDIsXG4gICAgICAxMjgsXG4gICAgICAxODAsXG4gICAgICAxOTYsXG4gICAgICAxMzgsXG4gICAgICA2OCxcbiAgICAgIDk4LFxuICAgICAgMTM5LFxuICAgICAgMTMyLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDIxOSxcbiAgICAgIDQ5LFxuICAgICAgMjA5LFxuICAgICAgMzYsXG4gICAgICAxMTcsXG4gICAgICAxMTQsXG4gICAgICAxNzYsXG4gICAgICAxNTAsXG4gICAgICAxNjQsXG4gICAgICAxMSxcbiAgICAgIDYwLFxuICAgICAgMjQ1LFxuICAgICAgMTYyLFxuICAgICAgMTYsXG4gICAgICAzOSxcbiAgICAgIDcyLFxuICAgICAgMTY0LFxuICAgICAgMjI3LFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc1UEdROEVXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTQ1MzgzMTA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzQ3MjUxNzIxMDM1MDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL3IrN29ERUwrZzQ3UUdHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjI0ZU9uTE1HQXZtdytZRElhMWtmM2t6VUhiKzJQZUE0QWxadTkzUFRoR2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibExaVHJFdmFzaVFqT2JkY3dHUkViUm5TZ1JHeldjcW5kdWk3ZGRTWC9TbE5qN3FCaUVEWXFhQ3lUbVVxNm1xaUx3enZGREMyeWpoai92VTdyOXpMRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2lMeno3YkhrN05nYmtYbHJpSzZQQjRXMGdhL0RYNHk0MDhDalpEMlZXeHZvRjhmT21CaDJ6WlZLWEdTUUhYZ0dGWTg4REJXZUlWKzVWYXdaZmNCRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk0NTM4MzEwOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyOTA4MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDRnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNGcC5qc29uIjogIntcImtleURhdGFcIjpcIlpIeVRJUXpHL3VuenJ0d28xWXJUckpORVhEYU80YW84SzhPbUpMT2VrZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTI4OTcwMTQzLFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw5LDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1ODU0OTYyNjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Demon",
  packname: process.env.PACK_NAME || "Mr sihilel",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
