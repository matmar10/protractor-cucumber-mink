'use strict';

module.exports = {
  ACTION: {
    CLICK_LINK: 'Unable to find a link with selector or text matching',
    CLICK_BUTTON: 'Unable to find button / input[type=submit] with selector or text matching',
    SUBMIT_FORM: 'Unable to find a form with selector',
  },
  NAVIGATION: {
    BASE_URL: 'Base url should be a valid absolute url.',
    ROOT: 'Please provide "config.baseUrl" or set BASE_URL in your env to use root function.',
  },
  LOCATOR: {
    NOT_FOUND_FOR_LIST: 'No element was found for the list of finders provided.',
  },
};
