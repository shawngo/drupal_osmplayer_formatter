(function ($, Drupal, window, document, undefined) {
    $(document).ready(function(){
        $(".osmplayer-format").each(function (index, value) {
            var video = $(value);

            video.attr('id', 'osmplayer-format-' + index);

            var video_url = video.attr("data-url");
            var video_type = video.attr("data-type");
            var video_height = video.attr("data-height");
            var osm_options = {
                width: '100%',
                height: video_height
            };

            switch(video_type){
            case "playlist":
                osm_options['playlist'] = video_url;
                osm_options['vertical'] = true;
                osm_options['pageLimit'] = 50;
                break;
            case "single":
                osm_options['file'] = video_url;
                break;
            }
            //debugger;
            video.osmplayer(osm_options);
        });
    });
})(jQuery, Drupal, this, this.document);