export default `/**
 * Seyuna CSS Reset
 *
 * Version: 0.0.1-canary.0
 * Website: https://seyuna.com/css-reset
 * License: MIT
 **/
/**
 * Apply to all elements
 *
 **/
*,
*::before,
*::after {
  /**
   * Tells the browser to account for any border and padding
   * in the values you specify for an element's width and height. 
   * 
   * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
   */
  box-sizing: border-box;
}

/**
 * Normalize html
 *
 **/
html {
  /**
   * Tells the browser to use this number to multiply the line height by the
   * element's font size.
   *
   * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
   **/
  line-height: 1.2;
  /**
   * This property controls the text inflation algorithm used on some smartphones
   * and tablets. Other browsers will ignore this property.
   *
   * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust
   **/
  text-size-adjust: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
}

/**
 * Normalize body
 *
 **/
body {
  /**
    * Remove margins.
    *
    * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/margin
    **/
  margin: 0;
}

/**
 * Normalize links and buttons
 *
 **/
a,
button {
  /**
   * Display the "pointer" cursor.
   *
   * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
   **/
  cursor: pointer;
}

/**
 * Normalize images
 *
 **/
img {
  /**
    * Make sure maximum width of the image does not exceed the container width.
    *
    * Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
    **/
  max-width: 100%;
  max-inline-size: 100%;
}` as string;
