var Main = Main || {};

Main.Game = function(){};

Main.Game.prototype = {
    create: function(){
        //sprites here
        this.Player.create();
    },

    update: function(){
        //collision, actions here
        this.Player.update();
    }
};