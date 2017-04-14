 (function() {
     function CollectionCtrl(Fixtures) {
         //this.albums = Fixtures.getCollection(12);
         this.albums = Fixtures.getAllAlbums();
         this.fixtures = Fixtures;
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();