// Creates the physics engine. This engine will update all bodies in the physics world at approx. 60fps.
var engine = Matter.Engine.create();

Matter.Engine.run(engine);

// Creates the renderer. This renderer will draw each body in the physics world on a html canvas at approx. 60fps.
var render = Matter.Render.create({
    canvas: document.getElementById('game'),
    engine: engine,
    options: {
        width: 1000,
        height: 720,
        wireframes: false,
        background: "images/sky.png"
    }
});

Matter.Render.run(render);

//****//    

var floor = Matter.Bodies.rectangle(500, 720 - (130 / 2), 1000, 130, {isStatic: true});
floor.render.sprite.texture = 'images/floor.png';
Matter.World.add(engine.world, floor);

createPlank(750, 720 - 130 - 102);
createPlank(750, 720 - 130 - 306);

var bird = Matter.Bodies.circle(200, 400, 23);
bird.render.sprite.texture = 'images/bird.png';
Matter.World.add(engine.world, bird);

function createPlank(positionX, positionY){
    var plank = Matter.Bodies.rectangle(positionX, positionY, 20, 204, {isStatic: false});
    plank.render.sprite.texture = 'images/plank.png';
    Matter.World.add(engine.world, plank);
}

document.addEventListener('keydown', function(e){
    // console.log(e.keyCode);

    switch(e.keyCode){
        case 38:
            Matter.Body.applyForce(bird, bird.position, {x: 0, y: -0.05});
            break;
        case 39:
            Matter.Body.applyForce(bird, bird.position, {x: 0.05, y: 0});
            break;
    }
 });