(function() {
    function seekBar($document) {
        /**
 * @function calculatePercent
 * @desc locate user's click on the bar and determine the value 
 * @param {Object} seekBar, event
 */
        var calculatePercent = function(seekBar, event) {
            var offsetX = event.pageX - seekBar.offset().left;
            var seekBarWidth = seekBar.width();
            var offsetXPercent = offsetX / seekBarWidth;
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1, offsetXPercent);
            return offsetXPercent;
        };

        return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true,
            restrict: 'E',
            scope: {
                onChange: '&'
            },
            link: function(scope, element, attributes) {
                scope.value = 0;
                scope.max = 100;

                var seekBar = $(element);

                attributes.$observe('value', function(newValue) {
                    scope.value = newValue;
                });

                attributes.$observe('max', function(newValue) {
                    scope.max = newValue;
                });
                /**
 * @function percentString
 * @desc determines the % based on the thumb location on the bar
 * @return width of the fill percentage in string
 */  
                var percentString = function () {
                    var value = scope.value;
                    var max = scope.max;
                    var percent = value / max * 100;
                    return percent + "%";
                };
                /**
 * @function fillStyle
 * @desc fills the bar based on the thumb location on the bar
 * @return width of the fill percentage in CSS format
 */  
                scope.fillStyle = function() {
                    return {width: percentString()};
                };

                scope.thumbStyle = function() {
                    return {left: percentString()};
                };
                /**
 * @function onClickSeekBar
 * @desc determines the current value on the seek bar
 * @param event
 * @return the current value on the seek bar
 */
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                    notifyOnChange(scope.value);
                };
                /**
 * @function trackThumb, bind, unbind
 * @desc tracks the thumb while and after the mouse drag in the bar
 * @param event
 */ 
                scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                        scope.$apply(function() {
                            scope.value = percent * scope.max;
                            notifyOnChange(scope.value);
                        });
                    });

                    $document.bind('mouseup.thumb', function() {
                        $document.unbind('mousemove.thumb');
                        $document.unbind('mouseup.thumb');
                    });
                };

                var notifyOnChange = function(newValue) {
                    if (typeof scope.onChange === 'function') {
                        scope.onChange({value: newValue});
                    }
                };
            }
        };
    }

    angular
        .module('blocJams')
        .directive('seekBar', ['$document', seekBar]);
})();