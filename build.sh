#! build.sh Archivo de construccion para Linux
echo Construyendo el proyecto... \
&& ./node_modules/.bin/babel src/js --out-dir build \
&& browserify build/app.js -o app/js/app.js \
&& cat src/css/*.css > app/css/bundle.css #\
#&& node-minify --compressor uglifyjs --input app/js/app.js --output app/js/app.js \
#&& node-minify --compressor clean-css --input app/css/bundle.css --output app/css/bundle.css
