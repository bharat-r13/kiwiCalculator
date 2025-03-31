import { test, expect } from '@playwright/test';



test.beforeEach(async ({ page }) => {
    await page.goto("https://www.westpac.co.nz/kiwisaver-investments/kiwisaver/kiwisaver-calculators/kiwisaver-calculator/")
})

// Sample tests with extracted logic for scalability 

// test('KiwiSaver Calculator Happy Path for First Home', async ({ page }) => {
//     const kiwiSaver = new KiwiSaverPage(page);
  
//     // Test steps without 'this' keyword
//     await kiwiSaver.fillAge(page, kiwiSaverData.user.age);
//     await kiwiSaver.clickNext(page);
//     await kiwiSaver.assertQuestionText(page, 'What will you be using your KiwiSaver savings for first?');
//     await kiwiSaver.chooseFirstHome(page);
//     await kiwiSaver.clickNext(page);
  
//     // Handle other steps...
//   });
  
//   test('KiwiSaver Calculator Happy Path for Retirement', async ({ page }) => {
//     const kiwiSaver = new KiwiSaverPage(page);
  
//     // Similar steps but with different data for retirement
//     await kiwiSaver.fillAge(page, '40');
//     await kiwiSaver.clickNext(page);
//     await kiwiSaver.assertQuestionText(page, 'What will you be using your KiwiSaver savings for first?');
//     // Additional steps for retirement path...
//   });
    
    test("should verify the 'About' section and interact with 'Open the calculator' button", async ({ page }) => {
        
        // Step 1: Ensure the container with the id "kiwisaver-schem" is visible
        const container = page.locator('#kiwisaver-schem');
        await expect(container).toBeVisible();
        
        // Step 2: Ensure the "About" section inside the container is visible by targeting the h2 tag with text 'About.'
        const aboutTitle = container.locator('h2.content-block__title', { hasText: 'About.' });
        await expect(aboutTitle).toBeVisible();
        
        // Step 3: Assert the content in the "About" section (p tags) with specific text
        const aboutText = container.locator('p', { hasText: 'The calculator helps you understand how your choices now affect how much you will have' });
        await expect(aboutText).toBeVisible();
        
        // Step 4: Ensure the "Open the calculator" button exists and is visible
        const openCalculatorButton = container.locator('button', { hasText: 'Open the calculator' });
        await expect(openCalculatorButton).toBeVisible();
        
        // Step 5: Click the "Open the calculator" button
        await openCalculatorButton.click();
        
        // Optionally, assert the page changes after clicking the button
        // const newUrl = await page.url();
        // await expect(newUrl).toContain('calculator');
    });


test("should open calculator and verify header elements", async ({ page }) => {
    // Step 1: Ensure the "Open the calculator" button is present and click it
    const openCalculatorButton = page.locator('button', { hasText: 'Open the calculator' });
    await openCalculatorButton.click()

    // Step 2: Assert that the header elements are visible
    const calculatorTitle = page.locator('p.MuiTypography-root', { hasText: 'Westpac KiwiSaver Scheme Calculator' });
    await expect(calculatorTitle).toBeVisible()

    const exitButtonText = page.locator('button', { hasText: 'Exit Calculator' });
    await expect(exitButtonText).toBeVisible()

    await exitButtonText.click()

    const container = page.locator('#kiwisaver-schem');
        await expect(container).toBeVisible();
});


test("happy path for First Home", async ({ page }) => {
    const openCalculatorButton = page.locator('button', { hasText: 'Open the calculator' })
    await openCalculatorButton.click()
  
    // Step 1: Assert that the calculator title is visible
    const calculatorTitle = page.locator('p.MuiTypography-root', { hasText: 'Westpac KiwiSaver Scheme Calculator' })
    await expect(calculatorTitle).toBeVisible()
  
    // Step 2: Assert on the question number "01"
    const questionNumber = page.locator('span.MuiTypography-caption')
    await expect(questionNumber).toHaveText('01')
  
    // Step 3: Assert on the question text asking for the user's age
    const questionText = page.locator('h2#q-QUESTION_AGE')
    await expect(questionText).toHaveText("First of all, what’s your current age?")
  
    // Step 4: Assert the presence of the age input field and its placeholder text
    const ageInputField = page.locator('#text-QUESTION_AGE')
    await expect(ageInputField).toBeVisible()
    await expect(ageInputField).toHaveAttribute('placeholder', 'Enter here')
  
    // Step 5: Assert the "Next Question" button is disabled initially
    const nextButton = page.locator('button:has-text("Next Question")')
    await expect(nextButton).toBeDisabled()
  
    // Step 6: Enter age (28) into the age input field
    await ageInputField.fill('28')
  
    // Step 7: Assert that the "Next Question" button is enabled after entering the age
    await expect(nextButton).toBeEnabled()
  
    // Step 8: Click the "Next Question" button
    await nextButton.click()
  
    // Step 9: Assert the question number "02"
    const questionNumber02 = page.locator('span.MuiTypography-caption').nth(1)
    await expect(questionNumber02).toHaveText('02')
  
    // Step 10: Assert on the question text asking about the KiwiSaver goal
    const questionText02 = page.locator('h2#q-QUESTION_KIWISAVER_GOAL') 
    await expect(questionText02).toHaveText("What will you be using your KiwiSaver savings for first?")
  
    // Step 11: Assert that both "First Home" and "Retirement" buttons are visible
    const firstHomeButton = page.locator('button:has-text("First Home")')
    const retirementButton = page.locator('button:has-text("Retirement")')
  
    await expect(firstHomeButton).toBeVisible()
    await expect(retirementButton).toBeVisible()
  
    // Step 12: Click on the "First Home" button
    await firstHomeButton.click()
  
    // Step 13: Assert the question number "03"
    const questionNumber03 = page.locator('span.MuiTypography-caption').nth(2)
    await expect(questionNumber03).toHaveText('03')
  
    // Step 14: Assert on the question text about purchasing the first home
    const questionText03 = page.locator('h2#q-QUESTION_WHEN_TO_BUY_HOME')
    await expect(questionText03).toHaveText("How many years until you expect to purchase your first home?")
  
    // Step 15: Assert that the dropdown for "years to buy home" is visible and has the placeholder text
    const dropdown = page.locator('div[aria-labelledby="dropdown-QUESTION_WHEN_TO_BUY_HOME"]');
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toHaveText('Choose option');
  
    // Step 16: Open the dropdown to select an option
    await dropdown.click();
  
    // Step 17: Assert the dropdown options are visible
    const dropdownOptions = page.locator('ul[role="listbox"]');
    await expect(dropdownOptions).toBeVisible();
    await expect(dropdownOptions.locator('li:has-text("In 5 years or more")')).toBeVisible();
  
    // Step 18: Select "In 5 years or more" from the dropdown
    const optionIn5Years = dropdownOptions.locator('li:has-text("In 5 years or more")');
    await optionIn5Years.click();
  
    // Step 19: Assert that the selected option is "In 5 years or more"
    await expect(dropdown).toHaveText('In 5 years or more');
  
    // Step 20: Assert the question number "04"
    const questionNumber04 = page.locator('span.MuiTypography-caption').nth(3)
    await expect(questionNumber04).toHaveText('04')
  
    // Step 21: Assert the question text about employment status
    const questionText04 = page.locator('h2#q-QUESTION_EMPLOYMENT_STATUS')
    await expect(questionText04).toHaveText("What’s your employment status?")
  
    // Step 22: Assert that the employment status dropdown has the placeholder text "Choose option"
    const employmentStatusDropdown = page.locator('div[aria-labelledby="dropdown-QUESTION_EMPLOYMENT_STATUS"]');
    await expect(employmentStatusDropdown).toBeVisible();
    await expect(employmentStatusDropdown).toHaveText('Choose option');
  
    // Step 23: Open the employment status dropdown
    await employmentStatusDropdown.click();
  
    // Step 24: Assert that the employment status dropdown options are visible
    const employmentDropdownOptions = page.locator('ul[role="listbox"][aria-labelledby="dropdown-QUESTION_EMPLOYMENT_STATUS"]');
    await expect(employmentDropdownOptions).toBeVisible();
  
    // Step 25: Assert that the "Employed" option is visible in the dropdown
    const optionEmployed = employmentDropdownOptions.locator('li[data-value="Employed"]');
    await expect(optionEmployed).toBeVisible();
  
    // Step 26: Select "Employed" from the dropdown
    await optionEmployed.click();
  
    // Step 27: Assert that the selected option is now "Employed"
    await expect(employmentStatusDropdown).toHaveText('Employed');
      
    const questionNumber05 = page.locator('span.MuiTypography-caption').nth(4) 
    await expect(questionNumber05).toHaveText('05')
  
    // Step 28: Assert the question text for income
    const questionText05 = page.locator('h2#q-QUESTION_INCOME')
    await expect(questionText05).toHaveText("What’s your income")
  
    // Step 29: Assert the visibility of the income input field
    const incomeInputField = page.locator('#text-QUESTION_INCOME')
    await expect(incomeInputField).toBeVisible()
  
    // Step 30: Assert the placeholder text for the income field
    await expect(incomeInputField).toHaveAttribute('placeholder', 'Enter income')
  
    // Step 31: Assert the dropdown for income period is visible
    const incomeDropdown = page.locator('div[aria-labelledby="dropdown-QUESTION_INCOME"]')
    await expect(incomeDropdown).toBeVisible()
    await expect(incomeDropdown).toHaveText('per year')  // Check the placeholder text
  
    // Step 32: Open the dropdown for income period
    await incomeDropdown.click()
  
    // Step 33: Assert that the dropdown options are visible
    const incomeDropdownOptions = page.locator('ul[role="listbox"][aria-labelledby="dropdown-QUESTION_INCOME"]');
    await expect(incomeDropdownOptions).toBeVisible();
    
    // Step 34: Assert that options like "per year" and "monthly" are visible
    await incomeDropdownOptions.waitFor({ state: 'attached' });
    await expect(incomeDropdownOptions.locator('li:has-text("per year")')).toBeVisible();
    await expect(incomeDropdownOptions.locator('li:has-text("per month")')).toBeVisible();  // Check for other options
  
    // Step 35: Select "per year" from the dropdown
    const optionPerYear = incomeDropdownOptions.locator('li:has-text("per year")');
    await optionPerYear.click();
  
    // Step 36: Assert that the dropdown now shows "per year"
    await expect(incomeDropdown).toHaveText('per year')
  
    // Step 37: Assert that the "Next Question" button is disabled initially
    const nextQuestionButton = page.locator('button:has-text("Next Question")').nth(1)
    await expect(nextQuestionButton).toBeDisabled()
  
    // Step 38: Enter income (120000) into the income field
    await incomeInputField.fill('120000')
  
    // Step 39: Assert that the "Next Question" button is now enabled
    await expect(nextQuestionButton).toBeEnabled()
  
    // Step 40: Click the "Next Question" button
    await nextQuestionButton.click()
  
    // Optional Step: Assert that we have moved to the next question after clicking "Next Question"
    const questionNumber06 = page.locator('span.MuiTypography-caption').nth(5);
    await expect(questionNumber06).toHaveText('06');
  
    // Step 41: Assert on the question text for "What’s your current KiwiSaver balance?"
    const questionText06 = page.locator('h2#q-QUESTION_KIWISAVER_BALANCE');
    await expect(questionText06).toHaveText("What’s your current KiwiSaver balance?");
  
    // Step 42: Assert the balance input field and its placeholder text
    const balanceInputField = page.locator('#text-QUESTION_KIWISAVER_BALANCE');
    await expect(balanceInputField).toBeVisible();
    await expect(balanceInputField).toHaveAttribute('placeholder', 'Enter balance');
  
    // Step 43: Assert the "Next Question" button is disabled initially
    const nextButton06 = page.locator('button:has-text("Next Question")').nth(2);
    await expect(nextButton06).toBeDisabled();
  
    // Step 44: Enter balance (20000) into the balance field
    await balanceInputField.fill('20000');
  
    // Step 45: Assert that the "Next Question" button is now enabled
    await expect(nextButton06).toBeEnabled();
  
    // Step 46: Click the "Next Question" button
    await nextButton06.click();
  
    // Optional: Assert the progression to the next question
    const questionNumber07 = page.locator('span.MuiTypography-caption').nth(6);
    await expect(questionNumber07).toHaveText('07');
  })




