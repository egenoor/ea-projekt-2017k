var Main = Main || {};

Main.Menu = function(){
    this.button = null;
    this.button2 = null;
};

Main.Menu.prototype = {

    create: function(){
        //create menu here
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.bg = this.game.add.sprite(0,0, 'menu');
        this.button2 = this.game.add.button(this.game.world.centerX - 95, 300, 'btn', this.startGame, this, 1, 0, 0);
        this.button = this.game.add.button(this.game.world.centerX - 95, 380, 'btn', this.scoreboard, this, 2, 3, 3);

    },

    startGame: function(){
        this.game.state.start("Game");
    },

    scoreboard: function(){
        this.game.state.start("Scoreboard");
    }

};