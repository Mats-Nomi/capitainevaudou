export default class cv2eActorSheet extends ActorSheet {
    get template() {
        return `systems/cv2e/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.fs2e;
        return data;
    }
}
