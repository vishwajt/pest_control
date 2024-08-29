(function($) {
    var slide = function(ele, options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 5000,
        };
        $.extend(true, setting, options);

        var $lis = $ele.find('li');
        var itemCount = $lis.length;  // Get the number of items

        // Generate states dynamically based on the provided structure
        var states = generateStates(itemCount);

        var timer = null;

        $ele.find('.next').on('click', function() {
            next();
        });
        $ele.find('.prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                if (state) {
                    $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img, video').css('opacity', state.$opacity);

                    var video = $(element).find('video').get(0);
                    if (video) {
                        if (state.$zIndex === 4) { // Play video when it reaches the top state
                            video.play();
                        } else {
                            video.pause();
                        }
                    }
                }
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }

        // Function to dynamically generate states while maintaining the structure
        function generateStates(count) {
            var baseStates = [
                { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
                { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
                { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
                { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
                { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
                { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
                { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
            ];

            var states = [];
            for (var i = 0; i < count; i++) {
                var index = i % baseStates.length;
                var baseState = baseStates[index];

                // Dynamically adjust the left position for additional states
                var leftOffset = Math.floor(i / baseStates.length) * 150; 
                var adjustedState = $.extend({}, baseState, { left: baseState.left + leftOffset });

                states.push(adjustedState);
            }

            return states;
        }
    }

    $.fn.Slider = function(options) {
        $(this).each(function(index, ele) {
            slide(ele, options);
        });
        return this;
    }
})(jQuery);
