jQuery(document).ready(function(){jQuery(".tribe-ticket-quantity").addClass("qty").wrap('<div class="quantity"></div>'),jQuery.trim(jQuery(".tribe-events-nav-previous").html()).length||jQuery.trim(jQuery(".tribe-events-nav-next").html()).length||jQuery(".tribe-events-sub-nav").parent("#tribe-events-footer").hide(),jQuery(".fusion-tribe-has-featured-image").each(function(){var a=jQuery(this).parent().height();jQuery(this).find(".tribe-events-event-image").css("height",a)}),jQuery(window).on("resize",function(){var a;jQuery(".fusion-tribe-has-featured-image").each(function(){jQuery(this).find(".tribe-events-event-image").css("height","auto"),a=jQuery(this).parent().height(),jQuery(this).find(".tribe-events-event-image").css("height",a)})})}),jQuery(document).ajaxComplete(function(){var a,b;(jQuery("body").hasClass("events-archive")||jQuery("body").find(".tribe-events-shortcode .fusion-blog-layout-grid").length)&&(a=jQuery(this).parents("#tribe-events").length?jQuery(this):jQuery("#tribe-events .fusion-blog-layout-grid"),b=a.find(".post"),b.each(function(){jQuery(this).find(".fusion-post-slideshow").flexslider(),jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()}),a.css("height",a.height()),b.hide(),imagesLoaded(b,function(){a.css("height",""),b.fadeIn(),a.isotope(),jQuery(window).trigger("resize",!1),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})})),jQuery("body").hasClass("events-archive")&&(jQuery(".fusion-tribe-has-featured-image").each(function(){var a=jQuery(this).parent().height();jQuery(this).find(".tribe-events-event-image").css("height",a)}),jQuery(".fusion-page-title-bar h1").length&&(jQuery("#tribe-events-header").length?jQuery(".fusion-page-title-bar h1").html(jQuery("#tribe-events-header").data("viewtitle")):jQuery(".tribe-events-page-title").length&&jQuery(".fusion-page-title-bar h1").html(jQuery(".tribe-events-page-title").html())))}),jQuery(window).load(function(){jQuery(".tribe_events_filters_close_filters, .tribe_events_filters_show_filters").on("click",function(){var a=jQuery(this);setTimeout(function(){jQuery(a).parents("#tribe-events-content-wrapper").find(".fusion-blog-layout-grid").isotope()})})});