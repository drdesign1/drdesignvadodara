/**
 * ==========================================================================
 * DR DESIGN - PRICING NEW SEPARATE JS FILE
 * Description: Order automated dispatch system via Email client trigger,
 * WhatsApp chat API integration, push browser notification,
 * and state toggle for Monthly/Yearly subscriptions with explicit text updates.
 * ==========================================================================
 */

// 1. DYNAMIC DATA STRUCTURE FOR SOCIAL MEDIA PLANS (Prices & Every Single List Item)
const socialMediaPlans = {
    monthly: {
        basic: {
            price: "₹4,999",
            period: "per month",
            f1: "8 Posts including",
            f2: "2 Motion posts",
            f3: "3 Highlights",
            f4: "8 Stories",
            f5: "5 Reels"
        },
        standard: {
            price: "₹6,499",
            period: "per month",
            f1: "10 Posts including",
            f2: "2 Motion posts",
            f3: "4 Highlights",
            f4: "10 Stories",
            f5: "6 Reach Ads"
        },
        premium: {
            price: "₹7,999",
            period: "per month",
            f1: "15 Posts including",
            f2: "5 Motion posts",
            f3: "6 Highlights",
            f4: "12 Stories",
            f5: "4 Reach Ads"
        }
    },
    yearly: {
        basic: {
            price: "₹4,249", // Per month effective / Billed Annually
            period: "per year (billed annually)",
            f1: "96 Posts per Year",
            f2: "24 Motion posts",
            f3: "36 Highlights",
            f4: "96 Stories",
            f5: "60 Reels"
        },
        standard: {
            price: "₹5,524",
            period: "per year (billed annually)",
            f1: "120 Posts per Year",
            f2: "24 Motion posts",
            f3: "48 Highlights",
            f4: "120 Stories",
            f5: "72 Reach Ads"
        },
        premium: {
            price: "₹6,799",
            period: "per year (billed annually)",
            f1: "180 Posts per Year",
            f2: "60 Motion posts",
            f3: "72 Highlights",
            f4: "144 Stories",
            f5: "48 Reach Ads"
        }
    }
};

let currentPricingCycle = 'monthly';

/**
 * Switch Toggle Action for Subscription Plans (Monthly / Yearly)
 * Aapke naye HTML IDs ke sath fully optimized mapping
 */
function switchPricing() {
    const toggleCheckbox = document.getElementById("plan-toggle");
    const labelMonthly = document.getElementById("label-monthly");
    const labelYearly = document.getElementById("label-yearly");

    // Price & Period Elements
    const priceBasic = document.getElementById("price-basic");
    const periodBasic = document.getElementById("period-basic");
    const priceStandard = document.getElementById("price-standard");
    const periodStandard = document.getElementById("period-standard");
    const pricePremium = document.getElementById("price-premium");
    const periodPremium = document.getElementById("period-premium");

    if (toggleCheckbox.checked) {
        currentPricingCycle = 'yearly';
        labelMonthly.className = "dr-toggle-label inactive";
        labelYearly.className = "dr-toggle-label active";
        
        const data = socialMediaPlans.yearly;

        // --- 1. Basic Plan Update ---
        priceBasic.innerHTML = data.basic.price + "<span>/-</span>";
        periodBasic.innerText = data.basic.period;
        document.getElementById("f-basic-1").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f1}`;
        document.getElementById("f-basic-2").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f2}`;
        document.getElementById("f-basic-3").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f3}`;
        document.getElementById("f-basic-4").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f4}`;
        document.getElementById("f-basic-5").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f5}`;
        
        // --- 2. Standard Plan Update ---
        priceStandard.innerHTML = data.standard.price + "<span>/-</span>";
        periodStandard.innerText = data.standard.period;
        document.getElementById("f-standard-1").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f1}`;
        document.getElementById("f-standard-2").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f2}`;
        document.getElementById("f-standard-3").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f3}`;
        document.getElementById("f-standard-4").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f4}`;
        document.getElementById("f-standard-5").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f5}`;
        
        // --- 3. Premium Plan Update ---
        pricePremium.innerHTML = data.premium.price + "<span>/-</span>";
        periodPremium.innerText = data.premium.period;
        document.getElementById("f-premium-1").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f1}`;
        document.getElementById("f-premium-2").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f2}`;
        document.getElementById("f-premium-3").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f3}`;
        document.getElementById("f-premium-4").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f4}`;
        document.getElementById("f-premium-5").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f5}`;

    } else {
        currentPricingCycle = 'monthly';
        labelMonthly.className = "dr-toggle-label active";
        labelYearly.className = "dr-toggle-label inactive";
        
        const data = socialMediaPlans.monthly;

        // --- 1. Basic Plan Reset ---
        priceBasic.innerHTML = data.basic.price + "<span>/-</span>";
        periodBasic.innerText = data.basic.period;
        document.getElementById("f-basic-1").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f1}`;
        document.getElementById("f-basic-2").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f2}`;
        document.getElementById("f-basic-3").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f3}`;
        document.getElementById("f-basic-4").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f4}`;
        document.getElementById("f-basic-5").innerHTML = `<i class="fas fa-check"></i> ${data.basic.f5}`;
        
        // --- 2. Standard Plan Reset ---
        priceStandard.innerHTML = data.standard.price + "<span>/-</span>";
        periodStandard.innerText = data.standard.period;
        document.getElementById("f-standard-1").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f1}`;
        document.getElementById("f-standard-2").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f2}`;
        document.getElementById("f-standard-3").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f3}`;
        document.getElementById("f-standard-4").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f4}`;
        document.getElementById("f-standard-5").innerHTML = `<i class="fas fa-check"></i> ${data.standard.f5}`;
        
        // --- 3. Premium Plan Reset ---
        pricePremium.innerHTML = data.premium.price + "<span>/-</span>";
        periodPremium.innerText = data.premium.period;
        document.getElementById("f-premium-1").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f1}`;
        document.getElementById("f-premium-2").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f2}`;
        document.getElementById("f-premium-3").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f3}`;
        document.getElementById("f-premium-4").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f4}`;
        document.getElementById("f-premium-5").innerHTML = `<i class="fas fa-check"></i> ${data.premium.f5}`;
    }
}

/**
 * AUTOMATED ORDER PROCESSING FUNCTION
 * Handles: Email app trigger, WhatsApp redirect API, and custom browser alerts.
 */
function processDrOrder(categoryName, itemName, itemPrice) {
    const designerPhone = "919714004207"; // Aapka WhatsApp Phone Number
    const designerEmail = "your-email@gmail.com"; // Aapki Graphic Mail ID
    
    const plainTextMessage = `Hi Deepak,\n\nI want to place an order for:\n---------------------------------\n• Category: ${categoryName}\n• Plan/Work: ${itemName}\n• Price: ${itemPrice}\n---------------------------------\nKindly confirm and share the layout requirements to proceed.`;
    const encodedURLMessage = encodeURIComponent(`Hi Deepak, I want to place an order for:\n• Category: ${categoryName}\n• Work: ${itemName}\n• Price: ${itemPrice}\nKindly confirm the project details.`);

    // Browser Alert Message box
    alert(`⚡ Order Initiated Successfully!\n\nPackage: ${itemName}\nPrice: ${itemPrice}\n\nClicking OK will launch WhatsApp & your Email application simultaneously.`);

    // System Notification invoke
    pushBrowserNotification(itemName, itemPrice);

    // Open WhatsApp API in new tab
    const whatsappRedirectLink = `https://wa.me/${designerPhone}?text=${encodedURLMessage}`;
    window.open(whatsappRedirectLink, '_blank');

    // Mailto Intent trigger (with delay)
    setTimeout(function() {
        const emailSubject = encodeURIComponent(`New Design Order: ${itemName}`);
        window.location.href = `mailto:${designerEmail}?subject=${emailSubject}&body=${encodeURIComponent(plainTextMessage)}`;
    }, 500);
}

/**
 * Dynamic Handler Specific to Social Media Grid Cards Selection
 */
function processSocialMediaOrder(tierName) {
    const currentData = socialMediaPlans[currentPricingCycle][tierName];
    processDrOrder("Social Media Marketing", `Plan ${tierName.toUpperCase()} (${currentPricingCycle})`, currentData.price + "/-");
}

/**
 * HTML5 Web Notification Core Engine
 */
function pushBrowserNotification(planTitle, priceVal) {
    if (!("Notification" in window)) return;

    if (Notification.permission === "granted") {
        new Notification("DR Design - New Order Placed!", {
            body: `Order details for ${planTitle} (${priceVal}) sent to WhatsApp & Email.`,
            icon: "assets/images/logo.png"
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification("DR Design - New Order Placed!", {
                    body: `Order details for ${planTitle} (${priceVal}) sent to WhatsApp & Email.`,
                    icon: "assets/images/logo.png"
                });
            }
        });
    }
}

// Dom load hote hi system window notification check karega
document.addEventListener("DOMContentLoaded", function() {
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
});