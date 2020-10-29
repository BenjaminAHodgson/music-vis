
import { ThreeRuntime } from './vendor/three.js';
import * as threeData from './vendor/three-init.js';


var threeRunner = new ThreeRuntime(threeData.three);

export { threeRunner }
export { threeData }