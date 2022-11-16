"use strict";

import * as THREE from "../../../libs/three.module.js";

export default class SkyBox extends THREE.CubeTexture {
  constructor() {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      "../../IMAGIN3D/assets/images/skybox/right.png",
      "../../IMAGIN3D/assets/images/skybox/left.png",
      "../../IMAGIN3D/assets/images/skybox/top.png",
      "../../IMAGIN3D/assets/images/skybox/bottom.png",
      "../../IMAGIN3D/assets/images/skybox/front.png",
      "../../IMAGIN3D/assets/images/skybox/back.png",
    ]);
    super(texture);
  }
}
