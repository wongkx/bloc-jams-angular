(function() {
    function AlbumCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getCurrentAlbum();        
        this.songPlayer = SongPlayer;

        /*this.songs = angular.copy(this.albumData.songs);
        for (var i = 0; i< this.albumData.songs.length; i++){
            this.songs[i].number = i+1;
            this.songs[i].name = this.albumData.songs[i].title;
            this.songs[i].length = this.albumData.songs[i].duration;
        }*/
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();