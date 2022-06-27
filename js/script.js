/* Created by: marco cuconato
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-HTML/sw.js", {
    scope: "/ICS2O-Unit6-04-HTML/",
  })
}

/**
 * Input.
 */

 window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const sideA = parseInt(params.get('a'))
  const sideB = parseInt(params.get('b'))
  const height = parseInt(params.get('h'))

  // process
  const area = ((sideA + sideB) / 2) * height
  const dimensions = "<ul>\n<li>a base = " + sideA + "</li>\n<li>b base = " + sideB + "</li>\n<li>height = " + height + "</li>\n</ul>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' mm²'
}

