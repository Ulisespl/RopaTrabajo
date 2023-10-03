@echo off
rem build.bat Archivo de construccion para Windows
echo Construyendo el proyecto...
CALL babel src/js --out-dir build
CALL browserify build/app.js -o app/js/app.js
CALL copy /y src\\css\\*.css app\\css\\bundle.css
rem CALL node-minify --compressor uglifyjs --input app/js/app.js --output app/js/app.js
rem CALL node-minify --compressor clean-css --input app/css/bundle.css --output app/css/bundle.css
