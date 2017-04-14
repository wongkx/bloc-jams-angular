(function() {
    function Fixtures() {
        var Fixtures = {};

        var albumPicasso = {
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                { title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue.mp3' },
                { title: 'Green', duration: 103.96, audioUrl: 'assets/music/green.mp3' },
                { title: 'Red', duration: 268.45, audioUrl: 'assets/music/red.mp3' },
                { title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink.mp3' },
                { title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta.mp3' } 
            ]
        };

        var albumMarconi = {
            title: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/assets/images/album_covers/20.png',
            songs: [
                { title: 'Hello, Operator?', duration: '1:01' },
                { title: 'Ring, ring, ring', duration: '5:01' },
                { title: 'Fits in your pocket', duration: '3:21'},
                { title: 'Can you hear me now?', duration: '3:14' },
                { title: 'Wrong phone number', duration: '2:15'}
            ]
        };
        
        Fixtures.currentAlbum = null;
        
        Fixtures.getAlbum = function() {
            return albumPicasso;
        };
        
        Fixtures.getAllAlbums = function(){
            return [albumPicasso, albumMarconi];
        }
            
        Fixtures.setCurrentAlbum = function(album) {
            currentAlbum = album;
        }
        
        Fixtures.getCurrentAlbum = function(){
            return currentAlbum;
        }
        
        Fixtures.getCollection = function(numberOfAlbums) {
            this.albums = [];
            for (var i=0; i < numberOfAlbums; i++) {
                this.albums.push(Fixtures.getAlbum());
            } 
            return this.albums;
        };
        

        return Fixtures;
    }

    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();