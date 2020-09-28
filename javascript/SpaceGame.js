var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        
    },
    scene: {
        preload: preload,
        create: create,
        update : update
    }
};
var sky, jet ;
var game = new Phaser.Game(config);

function preload (){
    this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');   
    this.load.image('jet', 'asserts/jetplane.png');
    this.load.image('bullet', 'asserts/bullet.png');
    this.load.image('coin', 'asserts/coin.png');
}

function create (){
    sky= this.add.image(400,300,'sky');
    jet = this.physics.add.image(400,500,'jetplane')
}
    // jet.setCollideWorldBounds(true)
    
    // cursors = this.input.keyboard.createCursorkeys( );
    // this.input.on('pointerdown',shoot,this)

    // bullet= this .physic.add.group(){
        // key : 'bomb',
        // repeat : 3,
        // setXY :{
        //     x : 20, y : 50,stepX: Phaser.Math.Between(10,config.width-)
        // } 

function update() {

}
    






