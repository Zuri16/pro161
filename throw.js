AFRAME.registerComponent("bowling-balls", {
    init: function(){
        this.createShoot()
    },
    createShoot: function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "z"){
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {
                    primitive:"sphere",
                    radius:1,
                })
                //bullet.setAttribute("material", "color", "black")
                bullet.setAttribute("scale", { x: 2, y: 2, z: 2 });
                bullet.setAttribute("gltf-model", "./bolos161-main/models/bowling_ball/scene.gltf");
                var cam=document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bullet.setAttribute("position", {
                    x:pos.x,
                    y:pos.y -0.65,
                    z:pos.z
                })
                var camPhi = document.querySelector("#camera").object3D
                var vector = new THREE.Vector3()
                camPhi.getWorldDirection(vector)
                bullet.setAttribute("velocity", vector.multiplyScalar(-2))
                var escena = document.querySelector("#scene")
                escena.appendChild(bullet)
            }
        })
    } 
})