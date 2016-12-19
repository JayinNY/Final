var camera, scene, renderer;

var sun, earth, moon, victim, article, david, eric, gray, brown;

window.onload = function() {
   //Camera
   var fov = 45;
   var aspectRatio = window.innerWidth / window.innerHeight;
   var near = 1;
   var far = 1000;
   camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
   
   //Scene
   scene = new THREE.Scene();
   
   //Renderer
   renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   
   
   // Create some 3d objects
   var textureLoader = new THREE.TextureLoader();
    
//Love the center sphere
    
   var sunTexture = textureLoader.load('images/equal.png'); 
   var sunGeometry = new THREE.SphereGeometry(3.5, 20, 20);
   var sunMaterial = new THREE.MeshBasicMaterial({
       map: sunTexture,
       roughness: 1
   });
   sun = new THREE.Mesh(sunGeometry, sunMaterial);
   scene.add(sun);
   
//Victim1 
   var earthTexture = textureLoader.load('images/article2.jpg');
   var earthGeometry = new THREE.SphereGeometry(3, 20, 20);
   var earthMaterial = new THREE.MeshStandardMaterial({
       map: earthTexture,
       roughness: 1
   });
   earth = new THREE.Mesh(earthGeometry, earthMaterial);
   scene.add(earth);
   earth.position.x = 0;
   earth.position.y = 8;
    
//Victim2   
   var moonTexture = textureLoader.load('images/article3.jpg');
   var moonGeometry = new THREE.SphereGeometry(3, 20, 20);
   var moonMaterial = new THREE.MeshStandardMaterial({
       map: moonTexture,
       roughness: 1
   });
   moon = new THREE.Mesh(moonGeometry, moonMaterial);
   scene.add(moon);
   
   moon.position.x = 0;
   moon.position.y =-8;
    
//Victim3    
   var victimTexture = textureLoader.load('images/article4.jpg');
   var victimGeometry = new THREE.SphereGeometry(3, 20, 20);
   var victimMaterial = new THREE.MeshStandardMaterial({
       map: victimTexture,
       roughness: 1
   });
   victim = new THREE.Mesh(victimGeometry, victimMaterial);
   scene.add(victim);
   
   victim.position.x = 8;
   victim.position.y = 8;

//Victim4    
   var articleTexture = textureLoader.load('images/article5.jpg');
   var articleGeometry = new THREE.SphereGeometry(3, 20, 20);
   var articleMaterial = new THREE.MeshStandardMaterial({
       map: articleTexture,
       roughness: 1
   });
   article = new THREE.Mesh(articleGeometry, articleMaterial);
   scene.add(article);
   
   article.position.x = -8;
   article.position.y = -8;  

//Victim5    
   var davidTexture = textureLoader.load('images/article6.jpg');
   var davidGeometry = new THREE.SphereGeometry(3, 20, 20);
   var davidMaterial = new THREE.MeshStandardMaterial({
       map: davidTexture,
       roughness: 1
   });
   david = new THREE.Mesh(davidGeometry, davidMaterial);
   scene.add(david);
   
   david.position.x = 8;
   david.position.y = 0;  
    
//Victim6  
   var ericTexture = textureLoader.load('images/article7.jpg');
   var ericGeometry = new THREE.SphereGeometry(3, 20, 20);
   var ericMaterial = new THREE.MeshStandardMaterial({
       map: ericTexture,
       roughness: 1
   });
   eric = new THREE.Mesh(ericGeometry, ericMaterial);
   scene.add(eric);
   
   eric.position.x = -8;
   eric.position.y = 0;
    
//Victim7 
   var grayTexture = textureLoader.load('images/article1.png');
   var grayGeometry = new THREE.SphereGeometry(3, 20, 20);
   var grayMaterial = new THREE.MeshStandardMaterial({
       map: grayTexture,
       roughness: 1
   });
   gray = new THREE.Mesh(grayGeometry, grayMaterial);
   scene.add(gray);
   
   gray.position.x = -8;
   gray.position.y = 8;  
    
//Victim8
   var brownTexture = textureLoader.load('images/article1.png');
   var brownGeometry = new THREE.SphereGeometry(3, 20, 20);
   var brownMaterial = new THREE.MeshStandardMaterial({
       map: brownTexture,
       roughness: 1
   });
   brown = new THREE.Mesh(brownGeometry, brownMaterial);
   scene.add(brown);
   
   brown.position.x = 8;
   brown.position.y = -8;  

    
       
// Create lights 
   var ambient = new THREE.AmbientLight(0x444444);
   scene.add(ambient);
   
   var light = new THREE.PointLight(0xffffff, 3);
   scene.add(light);
   
   camera.position.z = 35;
   
   requestAnimationFrame(animate);
};

//addEventListener with clicking 
document.addEventListener('mousedown', function(event) {
   camera.rotation.x = 0.5 * ((event.offsetY / window.innerHeight) * 2 - 1);
});

//The speed of spinning and direction
function animate() {
   sun.rotation.y += 0.009;
   earth.rotation.y += 0.01;
   moon.rotation.y += 0.02;
   victim.rotation.y += 0.01;
   article.rotation.y += 0.02
   david.rotation.y += 0.01;
   eric.rotation.y += 0.02;  
   gray.rotation.y += 0.009; 
   brown.rotation.y += 0.009;
  
    

   
   renderer.render(scene, camera);
   requestAnimationFrame(animate);
}

