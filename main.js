{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 onEvent("startscreen2Button", "click", function() \{\
  hideElement("startscreenButton");\
  if ((getNumber("initialBalance")) <= 0) \{\
    showElement("nocredit");\
    hideElement("startscreenButton");\
  \} else if ((getNumber("initialBalance") >= 0)) \{\
    showElement("startscreenButton");\
    hideElement("nocredit");\
  \} else \{\
    showElement("screen1Warning");\
  \}\
\});\
\
onEvent("startscreenButton", "click", function() \{\
  setScreen("screen2");\
\});\
\
var deli = \{choco:1000, squid:1000, sausage:1000, fruit:1000, panini:1000\};\
var lunch = \{korean:5000, western:5000, fastFood:5000\};\
var convStore = \{banana:2500, chips:2500, water:2500, tea:2500, ice:2500\};\
var menus = \{deli:deli, lunch:lunch, convStore:convStore\}\
console.log(menus["deli"]["choco"])\
}