// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the volume of a pyramid.
 */
function calculateVolumeOfPyramid () {
  // input
  const baseLength = parseFloat(document.getElementById('base-length').value)
  const baseWidth = parseFloat(document.getElementById('base-width').value)
  const pyramidHeight = parseFloat(document.getElementById('pyramid-height').value)

  // process
  const baseArea = baseLength * baseWidth
  const volumeOfPyramid = (1/3) * baseArea * pyramidHeight

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfPyramid.toFixed(2) + ' cm³'
}
