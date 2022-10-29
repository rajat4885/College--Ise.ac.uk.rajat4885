﻿!(function ($) {
    $(document).ready(function () {

        var container = $(".searchSlice, .findanexpertSidebar");

        if (container.length == 0) {
            return;
        }

        var collection = container.find("#collectionToSearch").val();
      	var profile = container.find("#profileToSearch").val() || '_default';
        var autompleteWrapId = "#" + container.find(".autocompleteWrap").attr('id');


        // Query completion setup.
        container.find(".query").fbcompletion({
            'enabled': 'enabled'
            , 'standardCompletionEnabled': true
            , 'collection': collection
            , 'program': 'https://lse.funnelback.co.uk/s/suggest.json'
            , 'format': 'extended'
            , 'alpha': '.5'
            , 'show': '10'
            , 'sort': '0'
            , 'length': '3'
            , 'delay': '0'
            , 'profile': profile
            , 'query': ''
            , 'appendTo': autompleteWrapId,

            //Search based completion
            'searchBasedCompletionEnabled': false
            , 'searchBasedCompletionProgram': 'https://lse.funnelback.co.uk/s/search.json'
        ,
        });
    });
})(jQuery);