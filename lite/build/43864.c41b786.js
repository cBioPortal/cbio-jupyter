"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[43864],{29772:(o,n,e)=>{e.r(n),e.d(n,{main:()=>T});var t=e(20977),a=e(71906),r=e(32856),i=(e(11555),e(29486),e(65573),e(1892)),l=e.n(i),A=e(95760),s=e.n(A),p=e(38311),d=e.n(p),c=e(58192),b=e.n(c),u=e(38060),h=e.n(u),f=e(54865),m=e.n(f),k=e(845),j={};j.styleTagTransform=m(),j.setAttributes=b(),j.insert=d().bind(null,"head"),j.domAPI=s(),j.insertStyleElement=h(),l()(k.Z,j),k.Z&&k.Z.locals&&k.Z.locals,e(39739),e(94395),e(48808),e(18934),e(24017),e(72867),e(36309),e(91532),e(20603),e(17363),e(9755),e(58169),e(15055),e(76838),e(53109),e(69226),e(3727),e(48004),e(24295),e(22090),e(58530),e(26053),e(84221),e(87967),e(79589),e(45637),e(16388),e(37609),e(49733),e(74958);var C=e(12563),y={};y.styleTagTransform=m(),y.setAttributes=b(),y.insert=d().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),l()(C.Z,y),C.Z&&C.Z.locals&&C.Z.locals,e(94453);var E=e(59988),g={};g.styleTagTransform=m(),g.setAttributes=b(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=h(),l()(E.Z,g),E.Z&&E.Z.locals&&E.Z.locals;var x=e(1555),v={};v.styleTagTransform=m(),v.setAttributes=b(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=h(),l()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;var w=e(94298),B={};B.styleTagTransform=m(),B.setAttributes=b(),B.insert=d().bind(null,"head"),B.domAPI=s(),B.insertStyleElement=h(),l()(w.Z,B),w.Z&&w.Z.locals&&w.Z.locals;const D=[e.e(35462).then(e.t.bind(e,35462,23))],N=["@jupyterlab/application-extension:dirty","@jupyterlab/application-extension:info","@jupyterlab/application-extension:layout","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:mode-switch","@jupyterlab/application-extension:notfound","@jupyterlab/application-extension:paths","@jupyterlab/application-extension:property-inspector","@jupyterlab/application-extension:shell","@jupyterlab/application-extension:status","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:announcements","@jupyterlab/apputils-extension:kernel-status","@jupyterlab/apputils-extension:palette-restorer","@jupyterlab/apputils-extension:print","@jupyterlab/apputils-extension:resolver","@jupyterlab/apputils-extension:running-sessions-status","@jupyterlab/apputils-extension:splash","@jupyterlab/apputils-extension:workspaces","@jupyterlab/console-extension:kernel-status","@jupyterlab/docmanager-extension:download","@jupyterlab/docmanager-extension:opener","@jupyterlab/docmanager-extension:path-status","@jupyterlab/docmanager-extension:saving-status","@jupyterlab/documentsearch-extension:labShellWidgetListener","@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:download","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file","@jupyterlab/filebrowser-extension:widget","@jupyterlab/fileeditor-extension:editor-syntax-status","@jupyterlab/help-extension:about","@jupyterlab/help-extension:open","@jupyterlab/notebook-extension:execution-indicator","@jupyterlab/notebook-extension:kernel-status","@jupyter-notebook/application-extension:logo","@jupyter-notebook/application-extension:opener","@jupyter-notebook/application-extension:path-opener","@jupyter-notebook/help-extension:about"];async function S(o,n){try{return(await window._JUPYTERLAB[o].get(n))()}catch(e){throw console.warn(`Failed to create module: package: ${o}; module: ${n}`),e}}async function T(){const o=[],n=[],i=[],l=[],A=[],s=[],p=JSON.parse(r.PageConfig.getOption("federated_extensions")),d=new Set;function*c(o){let n;n=o.hasOwnProperty("__esModule")?o.default:o;let e=Array.isArray(n)?n:[n];for(let o of e)r.PageConfig.Extension.isDisabled(o.id)||N.includes(o.id)||N.includes(o.id.split(":")[0])||(yield o)}p.forEach((o=>{o.liteExtension?s.push(S(o.name,o.extension)):(o.extension&&(d.add(o.name),n.push(S(o.name,o.extension))),o.mimeExtension&&(d.add(o.name),i.push(S(o.name,o.mimeExtension))),o.style&&l.push(S(o.name,o.style)))}));const b=[];if(!d.has("@jupyterlab/javascript-extension"))try{let o=e(59244);for(let n of c(o))b.push(n)}catch(o){console.error(o)}if(!d.has("@jupyterlab/json-extension"))try{let o=e(77050);for(let n of c(o))b.push(n)}catch(o){console.error(o)}if(!d.has("@jupyterlab/mermaid-extension"))try{let o=e(21068);for(let n of c(o))b.push(n)}catch(o){console.error(o)}if(!d.has("@jupyterlab/vega5-extension"))try{let o=e(98892);for(let n of c(o))b.push(n)}catch(o){console.error(o)}if(!d.has("@jupyterlite/iframe-extension"))try{let o=e(78862);for(let n of c(o))b.push(n)}catch(o){console.error(o)}if((await Promise.allSettled(i)).forEach((o=>{if("fulfilled"===o.status)for(let n of c(o.value))b.push(n);else console.error(o.reason)})),!d.has("@jupyterlab/application-extension"))try{let n=e(8226);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/apputils-extension"))try{let n=e(60648);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/cell-toolbar-extension"))try{let n=e(44176);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/codemirror-extension"))try{let n=e(98808);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/completer-extension"))try{let n=e(52546);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/console-extension"))try{let n=e(81346);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/csvviewer-extension"))try{let n=e(56689);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/docmanager-extension"))try{let n=e(98354);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/documentsearch-extension"))try{let n=e(14267);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/filebrowser-extension"))try{let n=e(21266);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/fileeditor-extension"))try{let n=e(93055);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/help-extension"))try{let n=e(50897);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/imageviewer-extension"))try{let n=e(88624);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/lsp-extension"))try{let n=e(74994);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/mainmenu-extension"))try{let n=e(73120);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/markdownviewer-extension"))try{let n=e(97906);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/markedparser-extension"))try{let n=e(41060);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/mathjax-extension"))try{let n=e(86052);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/mermaid-extension"))try{let n=e(32083);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/metadataform-extension"))try{let n=e(10752);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/notebook-extension"))try{let n=e(8636);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/rendermime-extension"))try{let n=e(76753);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/shortcuts-extension"))try{let n=e(79799);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/theme-dark-extension"))try{let n=e(729);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/theme-dark-high-contrast-extension"))try{let n=e(61472);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/theme-light-extension"))try{let n=e(81417);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/toc-extension"))try{let n=e(60256);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/tooltip-extension"))try{let n=e(38229);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/translation-extension"))try{let n=e(81910);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlab/ui-components-extension"))try{let n=e(45911);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyter-notebook/application-extension"))try{let n=e(99411);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyter-notebook/docmanager-extension"))try{let n=e(56877);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyter-notebook/help-extension"))try{let n=e(58630);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyter-notebook/notebook-extension"))try{let n=e(66538);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlite/application-extension"))try{let n=e(36269);for(let e of c(n))o.push(e)}catch(o){console.error(o)}if(!d.has("@jupyterlite/notebook-application-extension"))try{let n=e(48511);for(let e of c(n))o.push(e)}catch(o){console.error(o)}(await Promise.allSettled(n)).forEach((n=>{if("fulfilled"===n.status)for(let e of c(n.value))o.push(e);else console.error(n.reason)})),(await Promise.all(D)).forEach((o=>{for(let n of c(o))A.push(n)})),(await Promise.allSettled(s)).forEach((o=>{if("fulfilled"===o.status)for(let n of c(o.value))A.push(n);else console.error(o.reason)})),(await Promise.allSettled(l)).filter((({status:o})=>"rejected"===o)).forEach((({reason:o})=>{console.error(o)}));const u=new a.JupyterLiteServer({});u.registerPluginModules(A),await u.start();const{serviceManager:h}=u,f=new t.NotebookApp({mimeExtensions:b,serviceManager:h});f.name=r.PageConfig.getOption("appName")||"JupyterLite",f.registerPluginModules(o),"true"===(r.PageConfig.getOption("exposeAppInBrowser")||"").toLowerCase()&&(window.jupyterapp=f),await f.start(),await f.restored}},845:(o,n,e)=>{e.d(n,{Z:()=>s});var t=e(20559),a=e.n(t),r=e(93476),i=e.n(r),l=e(15820),A=i()(a());A.i(l.Z),A.push([o.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/**\n  Document oriented look for the notebook.\n  This includes changes to the look and feel of the JupyterLab Notebook\n  component like:\n  - scrollbar to the right of the page\n  - drop shadow on the notebook\n  - smaller empty space at the bottom of the notebook\n  - compact view on mobile\n*/\n\n/* Keep the notebook centered on the page */\n\nbody[data-notebook='notebooks'] .jp-NotebookPanel-toolbar {\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-outer {\n  width: unset !important;\n  padding-top: unset;\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(\n    calc(\n        100% - var(--jp-notebook-max-width) - var(--jp-notebook-padding-offset)\n      ) * 0.5\n  ) !important;\n  background: var(--jp-layout-color2);\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-inner {\n  margin-top: var(--jp-notebook-toolbar-margin-bottom);\n  /* Adjustments for the extra top and bottom notebook padding */\n  margin-bottom: calc(4 * var(--jp-notebook-padding));\n}\n\nbody[data-notebook='notebooks'] .jp-Notebook-cell {\n  background: var(--jp-layout-color0);\n  padding-left: calc(2 * var(--jp-cell-padding));\n  padding-right: calc(2 * var(--jp-cell-padding));\n}\n\n/* Empty space at the bottom of the notebook (similar to classic) */\nbody[data-notebook='notebooks']\n  .jp-Notebook.jp-mod-scrollPastEnd\n  .jp-WindowedPanel-outer::after {\n  min-height: 100px;\n}\n\n/* Fix background colors */\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-outer > * {\n  background: var(--jp-layout-color0);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook.jp-mod-commandMode\n  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {\n  background: var(--jp-layout-color0) !important;\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::before {\n  content: ' ';\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 11px;\n}\n\n/* Cell toolbar adjustments */\n\nbody[data-notebook='notebooks'] .jp-cell-toolbar {\n  background: unset;\n  box-shadow: unset;\n}\n\n/** first code cell on mobile\n    (keep the selector above the media query)\n*/\nbody[data-notebook='notebooks']\n  .jp-CodeCell[data-windowed-list-index='0']\n  .jp-cell-toolbar {\n  top: unset;\n}\n\n@media only screen and (max-width: 760px) {\n  /* first code cell on mobile */\n  body[data-notebook='notebooks']\n    .jp-CodeCell[data-windowed-list-index='0']\n    .jp-cell-toolbar {\n    top: var(--jp-notebook-padding);\n  }\n\n  body[data-notebook='notebooks'] .jp-MarkdownCell .jp-cell-toolbar,\n  body[data-notebook='notebooks'] .jp-RawCell .jp-cell-toolbar {\n    top: calc(0.5 * var(--jp-notebook-padding));\n  }\n}\n\n/* Tweak the notebook footer (to add a new cell) */\nbody[data-notebook='notebooks'] .jp-Notebook-footer {\n  background: unset;\n  width: 100%;\n  margin-left: unset;\n}\n\n/* Mobile View */\n\nbody[data-format='mobile'] .jp-NotebookCheckpoint {\n  display: none;\n}\n\nbody[data-format='mobile'] .jp-WindowedPanel-outer > *:first-child {\n  margin-top: 0;\n}\n\nbody[data-format='mobile'] .jp-ToolbarButton .jp-DebuggerBugButton {\n  display: none;\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-viewport {\n  background: var(--jp-layout-color0);\n  box-shadow: var(--jp-elevation-z4);\n  padding: unset;\n\n  /* Extra padding at the top and bottom so the notebook looks nicer */\n  padding-top: calc(2 * var(--jp-notebook-padding));\n  padding-bottom: calc(2 * var(--jp-notebook-padding));\n}\n\n/* Notebook box shadow */\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  > *:first-child:last-child::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px 0px 12px 1px var(--jp-shadow-umbra-color);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::after,\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::before {\n  content: ' ';\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 11px;\n}\n\n/* Additional customizations of the components on the notebook page */\n\n.jp-NotebookKernelLogo {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-right: 8px;\n}\n\n.jp-NotebookKernelLogo img {\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n}\n\n.jp-NotebookKernelStatus {\n  margin: 0;\n  font-weight: normal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: var(--jp-private-title-panel-height);\n  padding-left: var(--jp-kernel-status-padding);\n  padding-right: var(--jp-kernel-status-padding);\n}\n\n.jp-NotebookKernelStatus-error {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-NotebookKernelStatus-warn {\n  background-color: var(--jp-warn-color0);\n}\n\n.jp-NotebookKernelStatus-info {\n  background-color: var(--jp-info-color0);\n}\n\n.jp-NotebookKernelStatus-fade {\n  animation: 0.5s fade-out forwards;\n}\n\n.jp-NotebookTrustedStatus {\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  border: solid 1px var(--jp-border-color2);\n  cursor: help;\n}\n\n.jp-NotebookTrustedStatus-not-trusted {\n  cursor: pointer;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n#jp-title h1 {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#jp-title h1:hover {\n  background: var(--jp-layout-color2);\n}\n\n.jp-NotebookCheckpoint {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-skiplink {\n  position: absolute;\n  top: -100em;\n}\n\n.jp-skiplink:focus-within {\n  position: absolute;\n  z-index: 10000;\n  top: 0;\n  left: 46%;\n  margin: 0 auto;\n  padding: 1em;\n  width: 15%;\n  box-shadow: var(--jp-elevation-z4);\n  border-radius: 4px;\n  background: var(--jp-layout-color0);\n  text-align: center;\n}\n\n.jp-skiplink:focus-within a {\n  text-decoration: underline;\n  color: var(--jp-content-link-color);\n}\n","",{version:3,sources:["webpack://./../node_modules/@jupyter-notebook/notebook-extension/style/base.css"],names:[],mappings:"AAAA;;;;8EAI8E;;AAI9E;;;;;;;;CAQC;;AAED,2CAA2C;;AAE3C;EACE,mEAAmE;EACnE,oEAAoE;AACtE;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,mEAAmE;EACnE;;;;cAIY;EACZ,mCAAmC;AACrC;;AAEA;EACE,oDAAoD;EACpD,8DAA8D;EAC9D,mDAAmD;AACrD;;AAEA;EACE,mCAAmC;EACnC,8CAA8C;EAC9C,+CAA+C;AACjD;;AAEA,mEAAmE;AACnE;;;EAGE,iBAAiB;AACnB;;AAEA,0BAA0B;;AAE1B;EACE,mCAAmC;AACrC;;AAEA;;;EAGE,8CAA8C;AAChD;;AAEA;;;EAGE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,WAAW;AACb;;AAEA,6BAA6B;;AAE7B;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;CAEC;AACD;;;EAGE,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B;;;IAGE,+BAA+B;EACjC;;EAEA;;IAEE,2CAA2C;EAC7C;AACF;;AAEA,kDAAkD;AAClD;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,kCAAkC;EAClC,cAAc;;EAEd,oEAAoE;EACpE,iDAAiD;EACjD,oDAAoD;AACtD;;AAEA,wBAAwB;;AAExB;;;EAGE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,yDAAyD;AAC3D;;AAEA;;;;;;EAME,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,WAAW;AACb;;AAEA,qEAAqE;;AAErE;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,kCAAkC;EAClC,+BAA+B;EAC/B,qCAAqC;EACrC,iDAAiD;EACjD,6CAA6C;EAC7C,8CAA8C;AAChD;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,eAAe;EACf,kBAAkB;EAClB,yCAAyC;EACzC,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,eAAe;EACf,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,+BAA+B;EAC/B,qCAAqC;EACrC,6DAA6D;EAC7D,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;EAC/B,qCAAqC;EACrC,6DAA6D;EAC7D,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,MAAM;EACN,SAAS;EACT,cAAc;EACd,YAAY;EACZ,UAAU;EACV,kCAAkC;EAClC,kBAAkB;EAClB,mCAAmC;EACnC,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,mCAAmC;AACrC",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n@import './variables.css';\n\n/**\n  Document oriented look for the notebook.\n  This includes changes to the look and feel of the JupyterLab Notebook\n  component like:\n  - scrollbar to the right of the page\n  - drop shadow on the notebook\n  - smaller empty space at the bottom of the notebook\n  - compact view on mobile\n*/\n\n/* Keep the notebook centered on the page */\n\nbody[data-notebook='notebooks'] .jp-NotebookPanel-toolbar {\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-outer {\n  width: unset !important;\n  padding-top: unset;\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(\n    calc(\n        100% - var(--jp-notebook-max-width) - var(--jp-notebook-padding-offset)\n      ) * 0.5\n  ) !important;\n  background: var(--jp-layout-color2);\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-inner {\n  margin-top: var(--jp-notebook-toolbar-margin-bottom);\n  /* Adjustments for the extra top and bottom notebook padding */\n  margin-bottom: calc(4 * var(--jp-notebook-padding));\n}\n\nbody[data-notebook='notebooks'] .jp-Notebook-cell {\n  background: var(--jp-layout-color0);\n  padding-left: calc(2 * var(--jp-cell-padding));\n  padding-right: calc(2 * var(--jp-cell-padding));\n}\n\n/* Empty space at the bottom of the notebook (similar to classic) */\nbody[data-notebook='notebooks']\n  .jp-Notebook.jp-mod-scrollPastEnd\n  .jp-WindowedPanel-outer::after {\n  min-height: 100px;\n}\n\n/* Fix background colors */\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-outer > * {\n  background: var(--jp-layout-color0);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook.jp-mod-commandMode\n  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {\n  background: var(--jp-layout-color0) !important;\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::before {\n  content: ' ';\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 11px;\n}\n\n/* Cell toolbar adjustments */\n\nbody[data-notebook='notebooks'] .jp-cell-toolbar {\n  background: unset;\n  box-shadow: unset;\n}\n\n/** first code cell on mobile\n    (keep the selector above the media query)\n*/\nbody[data-notebook='notebooks']\n  .jp-CodeCell[data-windowed-list-index='0']\n  .jp-cell-toolbar {\n  top: unset;\n}\n\n@media only screen and (max-width: 760px) {\n  /* first code cell on mobile */\n  body[data-notebook='notebooks']\n    .jp-CodeCell[data-windowed-list-index='0']\n    .jp-cell-toolbar {\n    top: var(--jp-notebook-padding);\n  }\n\n  body[data-notebook='notebooks'] .jp-MarkdownCell .jp-cell-toolbar,\n  body[data-notebook='notebooks'] .jp-RawCell .jp-cell-toolbar {\n    top: calc(0.5 * var(--jp-notebook-padding));\n  }\n}\n\n/* Tweak the notebook footer (to add a new cell) */\nbody[data-notebook='notebooks'] .jp-Notebook-footer {\n  background: unset;\n  width: 100%;\n  margin-left: unset;\n}\n\n/* Mobile View */\n\nbody[data-format='mobile'] .jp-NotebookCheckpoint {\n  display: none;\n}\n\nbody[data-format='mobile'] .jp-WindowedPanel-outer > *:first-child {\n  margin-top: 0;\n}\n\nbody[data-format='mobile'] .jp-ToolbarButton .jp-DebuggerBugButton {\n  display: none;\n}\n\nbody[data-notebook='notebooks'] .jp-WindowedPanel-viewport {\n  background: var(--jp-layout-color0);\n  box-shadow: var(--jp-elevation-z4);\n  padding: unset;\n\n  /* Extra padding at the top and bottom so the notebook looks nicer */\n  padding-top: calc(2 * var(--jp-notebook-padding));\n  padding-bottom: calc(2 * var(--jp-notebook-padding));\n}\n\n/* Notebook box shadow */\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  > *:first-child:last-child::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px 0px 12px 1px var(--jp-shadow-umbra-color);\n}\n\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::after,\nbody[data-notebook='notebooks']\n  .jp-Notebook\n  .jp-Notebook-cell:not(:first-child)::before {\n  content: ' ';\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 11px;\n}\n\n/* Additional customizations of the components on the notebook page */\n\n.jp-NotebookKernelLogo {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-right: 8px;\n}\n\n.jp-NotebookKernelLogo img {\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n}\n\n.jp-NotebookKernelStatus {\n  margin: 0;\n  font-weight: normal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: var(--jp-private-title-panel-height);\n  padding-left: var(--jp-kernel-status-padding);\n  padding-right: var(--jp-kernel-status-padding);\n}\n\n.jp-NotebookKernelStatus-error {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-NotebookKernelStatus-warn {\n  background-color: var(--jp-warn-color0);\n}\n\n.jp-NotebookKernelStatus-info {\n  background-color: var(--jp-info-color0);\n}\n\n.jp-NotebookKernelStatus-fade {\n  animation: 0.5s fade-out forwards;\n}\n\n.jp-NotebookTrustedStatus {\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  margin-top: 4px;\n  margin-bottom: 4px;\n  border: solid 1px var(--jp-border-color2);\n  cursor: help;\n}\n\n.jp-NotebookTrustedStatus-not-trusted {\n  cursor: pointer;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n#jp-title h1 {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#jp-title h1:hover {\n  background: var(--jp-layout-color2);\n}\n\n.jp-NotebookCheckpoint {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-skiplink {\n  position: absolute;\n  top: -100em;\n}\n\n.jp-skiplink:focus-within {\n  position: absolute;\n  z-index: 10000;\n  top: 0;\n  left: 46%;\n  margin: 0 auto;\n  padding: 1em;\n  width: 15%;\n  box-shadow: var(--jp-elevation-z4);\n  border-radius: 4px;\n  background: var(--jp-layout-color0);\n  text-align: center;\n}\n\n.jp-skiplink:focus-within a {\n  text-decoration: underline;\n  color: var(--jp-content-link-color);\n}\n"],sourceRoot:""}]);const s=A},15820:(o,n,e)=>{e.d(n,{Z:()=>l});var t=e(20559),a=e.n(t),r=e(93476),i=e.n(r)()(a());i.push([o.id,":root {\n  --jp-notebook-toolbar-margin-bottom: 20px;\n  --jp-notebook-padding-offset: 20px;\n\n  --jp-kernel-status-padding: 5px;\n}\n","",{version:3,sources:["webpack://./../node_modules/@jupyter-notebook/notebook-extension/style/variables.css"],names:[],mappings:"AAAA;EACE,yCAAyC;EACzC,kCAAkC;;EAElC,+BAA+B;AACjC",sourcesContent:[":root {\n  --jp-notebook-toolbar-margin-bottom: 20px;\n  --jp-notebook-padding-offset: 20px;\n\n  --jp-kernel-status-padding: 5px;\n}\n"],sourceRoot:""}]);const l=i},12563:(o,n,e)=>{e.d(n,{Z:()=>l});var t=e(20559),a=e.n(t),r=e(93476),i=e.n(r)()(a());i.push([o.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const l=i},59988:(o,n,e)=>{e.d(n,{Z:()=>l});var t=e(20559),a=e.n(t),r=e(93476),i=e.n(r)()(a());i.push([o.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const l=i},1555:(o,n,e)=>{e.d(n,{Z:()=>l});var t=e(20559),a=e.n(t),r=e(93476),i=e.n(r)()(a());i.push([o.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/notebook-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const l=i},94298:(o,n,e)=>{e.d(n,{Z:()=>l});var t=e(20559),a=e.n(t),r=e(93476),i=e.n(r)()(a());i.push([o.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../packages/server-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const l=i},7413:o=>{o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVQIHQGlAFr/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7+r3zKmT0/+pk9P/7+r3zAAAAAAAAAAABAAAAAAAAAAA6OPzM+/q9wAAAAAA6OPzMwAAAAAAAAAAAgAAAAAAAAAAGR8NiRQaCgAZIA0AGR8NiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQyoYJ/SY80UAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=43864.c41b786.js.map