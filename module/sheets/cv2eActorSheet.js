export default class cv2eActorSheet extends ActorSheet {
    get template() {
        return `systems/cv2e/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}
