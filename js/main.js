
          $( document ).ready(function() {
              var container = $('.grid');
              container.imagesLoaded(function(){
                container.masonry({
                  itemSelector: '.grid-item',
                  // columnWidth: sizer,
                  percentPosition: true
                });
              });
          });
