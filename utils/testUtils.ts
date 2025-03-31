import { Locator } from 'playwright';

/**
 * Helper function to fill an input field.
 * @param locator - The Playwright Locator for the input field.
 * @param value - The value to fill the input with.
 */
export async function fillInputField(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
}

/**
 * Helper function to click a button.
 * @param locator - The Playwright Locator for the button.
 */
export async function clickButton(locator: Locator): Promise<void> {
    await locator.click();
}

/**
 * Helper function to get the inner text of a locator.
 * @param locator - The Playwright Locator.
 * @returns The text content of the element.
 */
export async function getElementText(locator: Locator): Promise<string> {
    return await locator.innerText();
}
