var currentFavicon = null;
var originalFavicon = null;

var getFaviconTag = function() {
  var links = document.getElementsByTagName('link');

  for (var i = 0, len = links.length; i < len; i++) {
    if ((links[i].getAttribute('rel') || '').match(/\bicon\b/)) {
      return links[i];
    }
  }

  return false;
};

var getCurrentFavicon = function() {
  if (!originalFavicon || !currentFavicon) {
    var tag = getFaviconTag();
    originalFavicon = currentFavicon = tag ? tag.getAttribute('href') : '/favicon.ico';
  }

  return currentFavicon;
};

console.log(getCurrentFavicon());