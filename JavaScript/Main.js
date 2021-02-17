import * as SCENE from "./GameLogic/SceneRendering.js";
// Main function

main();

function main()
{
    // Load materials used in the game
    function loadContent() { 
        // Add content logic here
    }

    // Add initial objects to the scene
    function addToScene() {
        // Add scene logic here
    }

    // Animation loop. Three.js has both update and draw in the same function.
    function animate() {
        mainUpdate();
    }

    animatee();

}

function mainUpdate() {
    // Add update logic here
}