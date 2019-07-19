// SOURCE: http://codepen.io/Thibka/pen/mWGxNi
var canvas = document.getElementById('canvas'),
	context = canvas.getContext('2d'),
	canvasWidth = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
	canvasHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
	requestAnimationFram = window.requestAnimationFram ||
	window.mozRequestAnimationFrame ||
	windo.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame;
var persons = [],
	numberOfFireflies = 30,
	birthToGive = 25;

var colors = [];
/* Galactic Tea - http://www.colourlovers.com/palette/1586746/Galactic Tes */
colors[2] = [];
colors[2]['background'] = '#2F294F';
colors[2][1] = 'rgba(74,49,89,';
colors[2][2] = 'rgba(130,91,109,';
colors[2][3] = 'rgba(185,136,131,';
colors[2][4] = 'rgba(249,241,204,';

var colorTheme = 2, //getRandomInt(0,colors.length-1);
	mainSpeed=1;

function getRandomInt(min, max, exept) {
	var i = Math.floor(Math.random() * (max - min + 1)) + min;
	if (typeof exept == "undefined") return i;
	else if(typeof exept == 'number' && i == exept) return
	getRandomInt(min, max, exept);
	else if (typeof exept == 'object' && (i >= exept[0] && i <= exept[i]))return getRandomInt(min, max, exept);
	else return i;
}

function isEven(n) {
	return n == parseFloat(n) ? !(n % 2) : void 0;

function degToRad(deg) {
	return deg * (Math.PI /180);
}

function Firefly(id) {
	this.id = id;
	this.width = getRandomInt(3, 6);
	this.height = this.width;
	this.x = getRandomInt(0,(canvas.width - this.width));
	this.y = getRandomInt(0,(canvas.height - this.height));
	this.speed = (this.width <=10) ? 2 : 1;
	this.alpha = 1;
	this.alphaReduction = getRandomInt(1, 3) / 1000;
	this.color = colors[colorTheme][getRandomInt(1,colors[colorTheme].length, 1)];
	this.direction = getRandomInt(0,360);
	this.turner = getRandomInt(0,1) == 0 ? -1 : 1;
	this.turnerAmp = getRandomInt(1,2);
	this.isHit = false;
	this.stepCounter = 0;
	this.changeDirectionFrequency = getRandomInt(1,200);
	this.shape = 2; //getRandomInt(2,3);
	this.shadowBlur = getRandomInt(5, 25);
}
Firefly.prototype.stop = function() {
	this.update();
}

