import { BasePage } from "./basepage";

export class DashboardPage extends BasePage {
    private account = this.page.locator("//a[text()='MUHISV27@GMAIL.COM']");

    async successmsg() {
        return await this.getText(this.account);
    }
}