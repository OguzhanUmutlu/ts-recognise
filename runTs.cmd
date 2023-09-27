@echo off
node "%~dp0convert.js" "%1" "%~dp0out.js" && node "%~dp0out.js" && del "%~dp0out.js"
pause