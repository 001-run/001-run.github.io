var materialProperties = [
  {
    color: 0xFFFF00,
    transparent: true,
    opacity: 0.8
  },
  {
    color: 0x00FFFF,
    transparent: true,
    opacity: 0.8
  },
  {
    color: 0xFF00FF,
    transparent: true,
    opacity: 0.8
  }
];

var X = new THREE.Vector3(1, 0, 0);
var Y = new THREE.Vector3(0, 1, 0);
var Z = new THREE.Vector3(0, 0, 1);

var torii = [];

$(document).ready(function() {
  var WIDTH = document.body.clientWidth;
  var HEIGHT = document.body.clientHeight;

  var VIEW_ANGLE = 45;
  var ASPECT = WIDTH / HEIGHT;
  var NEAR = 0.1;
  var FAR = 10000;

  var renderer = new THREE.WebGLRenderer({
    alpha: true
  });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0x111111, 1);

  var $container = $('#glcontainer');
  $container.append(renderer.domElement);

  var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  camera.position.z = 300;

  var scene = new THREE.Scene();
  scene.add(camera);

  var composer = new THREE.EffectComposer(renderer);
  composer.addPass( new THREE.RenderPass(scene, camera));

  var glitchPass = new THREE.GlitchPass();

  glitchPass.renderToScreen = true;
  composer.addPass(glitchPass);

  $(window).on('resize', function() {
    WIDTH = document.body.clientWidth;
    HEIGHT = document.body.clientHeight;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix()
  });

  var lightProperties = [
    {
      color: 0xFF0000,
      x: 150,
      y: -210,
      z: 0
    },
    {
      color: 0x00FF00,
      x: -150,
      y: -210,
      z: 0
    },
    {
      color: 0x0000FF,
      x: 0,
      y: 300,
      z: 0
    },
    {
      color: 0xFFFFFF,
      x: 0,
      y: 0,
      z: 300
    },
  ];
  for (var i = 0; i < lightProperties.length; i++) {
    var pointLight = new THREE.PointLight(lightProperties[i].color);
    pointLight.position.set(lightProperties[i].x, lightProperties[i].y, lightProperties[i].z);
    scene.add(pointLight);
  }

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 150, 0);
  scene.add(spotLight);

  var count = 0;
  glitchPass.trigger_cb = function(rand) {
      for (var i = 0; i < torii.length; i++) {
        scene.remove(torii[i]);
      }
      torii = [];

      var SIZE = rand / 4;

      var geometry;
      if (count == 0) {
        geometry = new THREE.TetrahedronGeometry(SIZE, 1);
      } else if (count == 1) {
        geometry = new THREE.TetrahedronGeometry(SIZE, 0);
      } else if (count == 2) {
        geometry = new THREE.BoxGeometry(SIZE, SIZE, SIZE);
      } else if (count == 3) {
        geometry = new THREE.SphereGeometry(SIZE, 6, 6);
      }

      count = (count + 1) % 4;

      for (var i = 0; i < materialProperties.length; i++) {
        torii.push(new THREE.Mesh(geometry, new THREE.MeshLambertMaterial(materialProperties[i])));
        scene.add(torii[i]);
      }

      torii[0].rotateOnAxis(X, 90);
      torii[1].rotateOnAxis(Y, 90);
      torii[2].rotateOnAxis(Z, 90);
  };

  var speed = 0.009;

  var t = 0;
  function animate(timestamp) {
    for (var i = 0; i < torii.length; i++) {
      torii[i].rotateOnAxis(X, speed);
      torii[i].rotateOnAxis(Y, speed);
      torii[i].rotateOnAxis(Z, speed);

      torii[i].position.x += Math.cos(Math.PI / 24 * t) + 3 * (Math.random() - 0.5)
      torii[i].position.y += Math.sin(Math.PI / 36 * t) + 3 * (Math.random() - 0.5)
      torii[i].position.z += Math.cos(Math.PI / 48 * t) + 3 * (Math.random() - 0.5)
    }

    t++;
    composer.render();
    requestAnimationFrame(animate);
  };

  animate();
});
