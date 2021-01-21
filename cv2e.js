import { cv2e } from "./module/config/js";

//import cv2eItemSheet from "./module/sheets/cv2eItemSheet.js";
import cv2eActorSheet from "./module/sheets/cv2eActorSheet.js";

Hooks.once("init", function (){
    console.log("cv2e | initialising Capitaine Vaudou seconde edition system");

    CONFIG.cv2e = cv2e;

    //Items.unregisterSheet("core", ItemSheet);
    //Items.registerSheet("cv2e",cv2eItemSheet, {makeDefault:true})

    Items.unregisterSheet("core", ActorSheet);
    Items.registerSheet("cv2e",cv2eActorSheet, {makeDefault:true})
});