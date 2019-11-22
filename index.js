require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout WaWa', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Automate on Wawa', async function() {
            await driver.get('https://wawa.com');
            await driver.sleep(20000);
            await driver.executeScript('document.getElementsByClassName("top-level")[9].childNodes[3].style.display="block"');
            await driver.sleep(20000);
            await driver.findElement(By.partialLinkText("Hoagies")).click();
            await driver.sleep(20000); 
            await driver.findElement(By.linkText("Hot")).click();
    });
    after(() => driver && driver.quit());
})