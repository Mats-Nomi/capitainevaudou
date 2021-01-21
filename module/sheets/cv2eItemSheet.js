
export default class cv2eItemSheet extends ItemSheet {
    get template() {
        return `systems/cv2e/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}
