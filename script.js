const app = new PIXI.Application({
    width: 854,
    height: 480,
});

document.body.appendChild(app.view);

const rectangle = new PIXI.Graphics();
rectangle.beginFill(0xffffff);
rectangle.drawRect(0, 0, 100, 100);
rectangle.endFill();
rectangle.x = 10;
rectangle.y = app.view.height - rectangle.height - 10;

app.stage.addChild(rectangle);
