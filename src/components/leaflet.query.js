L.OSM.query = function (options) {
  var control = L.control(options);

  control.onAdd = function (map) {
    var $container = $('<div>')
      .attr('class', 'control-query');

    var link = $('<a>')
      .attr('class', 'control-button')
      .attr('href', '#')
      .html('<span class="icon query"></span>')
      .appendTo($container);

    map.on('zoomend', update);

    update();

    function update() {
      var wasDisabled = link.hasClass('disabled'),
        isDisabled = map.getZoom() < 14;
      link
        .toggleClass('disabled', isDisabled)
        .attr('data-original-title', 'javascripts.site.queryfeature');

      if (isDisabled && !wasDisabled) {
        link.trigger('disabled');
      } else if (wasDisabled && !isDisabled) {
        link.trigger('enabled');
      }
    }

    return $container[0];
  };

  return control;
};
