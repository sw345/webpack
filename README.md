# webpack

help I'm stuck...  this is the error i get on terminal:


Hash: 16c922c73731ea91b3a0
Version: webpack 4.30.0
Time: 961ms
Built at: 04/21/2019 5:50:06 PM
                          Asset       Size  Chunks             Chunk Names
  bundle0d3cf35ceae609603325.js   2.34 KiB       0  [emitted]  app
                     index.html    3.1 KiB          [emitted]  
styles.c261fd6833649e0016e3.css  205 bytes       0  [emitted]  app
Entrypoint app = styles.c261fd6833649e0016e3.css bundle0d3cf35ceae609603325.js
[0] ./src/index.js 275 bytes {0} [built]
    + 6 hidden modules

ERROR in   Error: Child compilation failed:
  Entry module not found: Error: Can't resolve 'handblebars-loader' in '/Users/s  amson/Desktop/udemy/webpack-4':
  Error: Can't resolve 'handblebars-loader' in '/Users/samson/Desktop/udemy/webp  ack-4'
  
  - compiler.js:79 childCompiler.runAsChild
    [webpack-4]/[html-webpack-plugin]/lib/compiler.js:79:16
  
  - Compiler.js:306 compile
    [webpack-4]/[webpack]/lib/Compiler.js:306:11
  
  - Compiler.js:631 hooks.afterCompile.callAsync.err
    [webpack-4]/[webpack]/lib/Compiler.js:631:15
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compiler.js:628 compilation.seal.err
    [webpack-4]/[webpack]/lib/Compiler.js:628:31
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compilation.js:1329 hooks.optimizeAssets.callAsync.err
    [webpack-4]/[webpack]/lib/Compilation.js:1329:35
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compilation.js:1320 hooks.optimizeChunkAssets.callAsync.err
    [webpack-4]/[webpack]/lib/Compilation.js:1320:32
  
  
  - index.js:319 taskRunner.run
    [webpack-4]/[terser-webpack-plugin]/dist/index.js:319:9
  
  - TaskRunner.js:44 TaskRunner.run
    [webpack-4]/[terser-webpack-plugin]/dist/TaskRunner.js:44:7
  
  - index.js:225 TerserPlugin.optimizeFn
    [webpack-4]/[terser-webpack-plugin]/dist/index.js:225:18
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compilation.js:1315 hooks.additionalAssets.callAsync.err
    [webpack-4]/[webpack]/lib/Compilation.js:1315:36
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compilation.js:1311 hooks.optimizeTree.callAsync.err
    [webpack-4]/[webpack]/lib/Compilation.js:1311:32
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compilation.js:1248 Compilation.seal
    [webpack-4]/[webpack]/lib/Compilation.js:1248:27
  
  - Compiler.js:625 compilation.finish.err
    [webpack-4]/[webpack]/lib/Compiler.js:625:18
  
  - Compilation.js:1171 hooks.finishModules.callAsync.err
    [webpack-4]/[webpack]/lib/Compilation.js:1171:4
  
  
  - Hook.js:154 AsyncSeriesHook.lazyCompileHook
    [webpack-4]/[tapable]/lib/Hook.js:154:20
  
  - Compilation.js:1163 Compilation.finish
    [webpack-4]/[webpack]/lib/Compilation.js:1163:28
  
  - Compiler.js:622 hooks.make.callAsync.err
    [webpack-4]/[webpack]/lib/Compiler.js:622:17
  
  
  - Compilation.js:1095 _addModuleChain
    [webpack-4]/[webpack]/lib/Compilation.js:1095:12
  
  - Compilation.js:947 errorAndCallback.bail.err
    [webpack-4]/[webpack]/lib/Compilation.js:947:6
  
  - Compilation.js:980 moduleFactory.create
    [webpack-4]/[webpack]/lib/Compilation.js:980:14
  
  - NormalModuleFactory.js:397 factory
    [webpack-4]/[webpack]/lib/NormalModuleFactory.js:397:22
  

Child html-webpack-plugin for "index.html":
    
    ERROR in Entry module not found: Error: Can't resolve 'handblebars-loader' in '/Users/samson/Desktop/udemy/webpack-4'
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/sass-loader/lib/loader.js!src/components/heading/heading.scss:
    Entrypoint mini-css-extract-plugin = *
       2 modules
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/sass-loader/lib/loader.js!src/components/hello-world-button/hello-world-button.scss:
    Entrypoint mini-css-extract-plugin = *
       2 modules
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! webpack-4@1.0.0 build: `webpack`
npm ERR! Exit status 2
npm ERR! 
npm ERR! Failed at the webpack-4@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
