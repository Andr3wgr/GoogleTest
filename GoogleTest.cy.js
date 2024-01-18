describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1776, 1193);
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("test{enter}");
    cy.location("href").should("include", "https://www.google.com/search?q=test");
    cy.visit("https://www.google.com/");
    cy.get('a.MV3Tnb[href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"]').should('exist');
    cy.get('a.MV3Tnb[href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US"]').should('exist');
    cy.get('input.gNO89b[value="Google Search"][aria-label="Google Search"][name="btnK"][role="button"][tabindex="0"][type="submit"]').should('exist');
    cy.get('img.lnXdpd[alt="Google"][height="92"][src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"]').should('exist');
    cy.get('a.gb_F[aria-label="Gmail (opens a new tab)"][data-pid="23"][href="https://mail.google.com/mail/&ogbl"][target="_top"]').should('exist');
    cy.get('a.gb_F[aria-label="Search for Images (opens a new tab)"][data-pid="2"][href="https://www.google.com/imghp?hl=en&ogbl"][target="_top"]').should('exist');
    cy.get('a.gb_Aa.gb_kd.gb_Md.gb_le[aria-label="Sign in"][href="https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ"][target="_top"] span.gb_Id').should('exist');
    cy.get('input#gbqfbb[value="I\'m Feeling Lucky"][aria-label="I\'m Feeling Lucky"][name="btnI"][role="button"][tabindex="0"][type="submit"]').should('exist');
    cy.get('a.pHiOh[href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"]').should('exist');
    cy.get('a.pHiOh[href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"]').should('exist');
    cy.get('a.pHiOh[href="https://google.com/search/howsearchworks/?fg=1"]').should('exist');
    cy.get('a.pHiOh[href="https://sustainability.google/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content="]').should('exist');
    cy.get('a.pHiOh[href="https://policies.google.com/privacy?hl=en&fg=1"]').should('exist');
    cy.get('a.pHiOh[href="https://policies.google.com/terms?hl=en&fg=1"]').should('exist');
    cy.get('div.ayzqOc.pHiOh[jsname="LgbsSe"][aria-haspopup="true"]').should('exist');
    cy.get("div.c93Gbe div.CcNe6e > div").click();
    cy.get('a[href="https://www.google.com/preferences?hl=en&fg=1"][role="menuitem"][tabindex="-1"]').should('exist');
    cy.get('a[href="/advanced_search?hl=en&fg=1"][role="menuitem"][tabindex="-1"]').should('exist');
    cy.get('a[href="/history/privacyadvisor/search/unauth?utm_source=googlemenu&fg=1&cctld=com"][role="menuitem"][tabindex="-1"]').should('exist');
    cy.get('a[href="/history/optout?hl=en&fg=1"][role="menuitem"][tabindex="-1"]').should('exist');
    cy.get('a[href="https://support.google.com/websearch/?p=ws_results_help&hl=en&fg=1"][role="menuitem"][tabindex="-1"]').should('exist');
    cy.get('div.YpcDnf.OSrXXb.HG1dvd[jsname="ibnC6b"][role="none"] span[data-bucket="websearch"][role="menuitem"][tabindex="-1"][jsaction="trigger.YcfJ"]').should('exist');
    cy.get('div.tFYjZe[jscontroller="fXO0xe"][role="link"][tabindex="0"][jsaction="ok5gFc;x6BCfb:ggFCce;w3Ukrf:aelxJb"]').should('exist');
  })
})