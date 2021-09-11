import "./style.css"
//import "./cartrender.js"

const galary = document.getElementById('gel');

import { render } from "./render.js";
import items from './mass.js';

items.map(item => galary.appendChild(render(item)));