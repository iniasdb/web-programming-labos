import {Logger} from "./logger.js";
import cowsay from "cowsay";
let logger = new Logger();

logger.error("fuuuck");
logger.info("kutje vna a moeder");
logger.warning("attabakkes");

console.log(cowsay.say({
    text : "hello",
    s : true
}));