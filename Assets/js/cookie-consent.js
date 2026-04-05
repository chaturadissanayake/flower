document.addEventListener("DOMContentLoaded", () => {
    const consentName = "bloom_cookie_consent";
    
    if (!localStorage.getItem(consentName)) {
        createCookieBanner();
    }

    function createCookieBanner() {
        const banner = document.createElement("div");
        banner.id = "cookieBanner";
        
        Object.assign(banner.style, {
            position: "fixed",
            bottom: "20px",
            left: "20px",
            right: "20px",
            maxWidth: "400px",
            background: "#FFFFFF",
            boxShadow: "0 10px 30px rgba(58, 71, 61, 0.1)",
            border: "1px solid #E6E0D4",
            borderRadius: "4px",
            padding: "25px",
            zIndex: "9999",
            fontFamily: "'Montserrat', sans-serif",
            color: "#3A473D",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            transform: "translateY(100px)",
            opacity: "0",
            transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
        });

        banner.innerHTML = `
            <div>
                <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-style: italic; margin-bottom: 5px;">A moment of privacy</h3>
                <p style="font-size: 0.85rem; color: #6B7B6E; line-height: 1.5;">We use essential cookies to make our digital garden bloom correctly. We don't track your personal letters. <a href="privacy-policy.html" style="color: #C48B85; text-decoration: none; border-bottom: 1px solid #C48B85;">Learn more</a>.</p>
            </div>
            <div style="display: flex; gap: 10px; justify-content: flex-end;">
                <button id="acceptCookies" style="background: #3A473D; color: #FDFBF7; border: none; padding: 8px 20px; font-family: 'Montserrat', sans-serif; font-size: 0.8rem; cursor: pointer; border-radius: 2px;">Accept</button>
            </div>
        `;

        document.body.appendChild(banner);

        setTimeout(() => {
            banner.style.transform = "translateY(0)";
            banner.style.opacity = "1";
        }, 1000);

        document.getElementById("acceptCookies").addEventListener("click", () => {
            localStorage.setItem(consentName, "accepted");
            banner.style.transform = "translateY(100px)";
            banner.style.opacity = "0";
            setTimeout(() => banner.remove(), 500);
        });
    }
});