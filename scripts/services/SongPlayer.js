(function() {
    function SongPlayer() {
 /**
 * @desc SongPlayer object
 * @type {Object}
 */
        var SongPlayer = {};
 /**
 * @desc song object
 * @type {Object}
 */
        var currentSong= null;     
 /**
 * @desc Buzz object audio file
 * @type {Object}
 */
        var currentBuzzObject = null;

/**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                format: ['mp3'],
                preload: true
            });
            currentSong = song;
        }
/**
 * @function playSong
 * @desc Plays selected song and set playing as True
 * @param {Object} song
 */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }
/**
 * @function play
 * @desc Plays song if clicked on a new song, otherwise pauses it
 * @param {Object} song
 */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);
                playSong(song);
            }
            else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };
        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();