describe("Running the contanct us functionlity", () => {
  it("Input values text and adding all types of Expect condition", async () => {
    await browser.maximizeWindow();
    await browser.url("/Contact-Us/contactus.html");
    await expect(browser).toHaveUrl(
      "http://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );
    await expect(browser).toHaveUrlContaining("/Contact-Us/contactus.html");
    await expect(browser).toHaveTitle("WebDriver | Contact Us");
    await expect(browser).toHaveTitleContaining("Contact Us");

    const firstNameLocator = await $("[name='first_name']");
    await firstNameLocator.addValue("Ravi Teja");
    const lastNameLocator = await $("[name='last_name']");
    await lastNameLocator.addValue("Muppalla");
    const emailLocator = await $("[name='email']");
    await emailLocator.addValue("ravitejamuppalla5120@gmail.com");
    const commentsLocator = await $("[name='message']");
    await commentsLocator.addValue("THis is sample code for testing value");
    await browser.pause(1500);
  });

  it("Element Matchers Validation", async () => {
    await browser.maximizeWindow();
    await browser.url("/");

    const contactUsHeader = await $("#contact-us");
    await expect(contactUsHeader).toBeDisplayed();
    await expect(contactUsHeader).toExist();
    await expect(contactUsHeader).toBePresent();
    await expect(contactUsHeader).toBeExisting();
    const contactUsHeadersclass = await $("//*[@id='contact-us']/div");
    await expect(contactUsHeadersclass).toHaveAttribute("class", "thumbnail");
    await expect(contactUsHeadersclass).toHaveAttr("class", "thumbnail");
    await expect(contactUsHeadersclass).toHaveAttrContaining(
      "class",
      "thumbnail"
    );
    await expect(contactUsHeadersclass).toHaveAttributeContaining(
      "class",
      "thumbnail"
    );
    await expect(contactUsHeadersclass).toHaveElementClass("thumbnail");
    await expect(contactUsHeadersclass).toHaveElementClassContaining("nail");
  });
});
