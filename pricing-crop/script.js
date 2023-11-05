// KAMIL'S CODE
// const PRICING_CARDS = [
//     {
//         cardTitle: "Starting up",
//         cardIllustration: "https://i.ibb.co/jgKMGCb/crop1-1.png",
//         cardDescription: "Proin donec est sit nec nullam, non sollicitudin conubia tellus eu eget risus, venenatis iaculis, ex bibendum sed, in",
//         perks: [
//             "1 domain",
//             "Email support",
//             "200 GB cloud space"
//         ],
//         pricePerMonth: 4,
//         cardAccentColor: "#2349d6"
//     },
//     {
//         cardTitle: "Growing business",
//         cardIllustration: "https://i.ibb.co/tccrYQc/crop2-1.png",
//         cardDescription: "Proin donec est sit nec nullam, non sollicitudin conubia tellus eu eget risus, venenatis iaculis, ex bibendum sed, in",
//         perks: [
//             "10 domains",
//             "Email and phone support",
//             "500 GB cloud space"
//         ],
//         pricePerMonth: 12,
//         cardAccentColor: "#a502fc"
//     },
//     {
//         cardTitle: "Enterprise",
//         cardIllustration: "https://i.ibb.co/THJMYKp/crop3.png",
//         cardDescription: "Proin donec est sit nec nullam, non sollicitudin conubia tellus eu eget risus, venenatis iaculis, ex bibendum sed, in",
//         perks: [
//             "100 domains",
//             "24/7 email and phone support",
//             "Unlimited cloud space"
//         ],
//         pricePerMonth: 52,
//         cardAccentColor: "#f5055a"
//     },
// ];

// const renderCards = () => {
//     PRICING_CARDS.forEach(card => {
//         const { cardTitle, cardIllustration, cardDescription, perks, pricePerMonth, cardAccentColor } = card;

//         const cardEl = document.createElement('section');
//         cardEl.className = 'card';
//         cardEl.setAttribute('style', `--bg-before-el: ${cardAccentColor}`);

//         const cardIllustrationEl = document.createElement('img');
//         cardIllustrationEl.className = 'card_illustration';
//         cardIllustrationEl.src = cardIllustration;
//         cardIllustrationEl.alt = '';

//         const cardTitleEl = document.createElement('h2');
//         cardTitleEl.className = 'card_title';
//         cardTitleEl.textContent = cardTitle;

//         const cardDescriptionEl = document.createElement('p');
//         cardDescriptionEl.className = 'card_description';
//         cardDescriptionEl.textContent = cardDescription;

//         const pricePerMonthEl = document.createElement('div');
//         pricePerMonthEl.className = 'card_price';
//         pricePerMonthEl.setAttribute('style', `--bg: ${cardAccentColor}`);
//         pricePerMonthEl.innerHTML = `
//             <span>\$${pricePerMonth}</span>/mo
//         `;

//         const perksListEl = document.createElement('ul');
//         perksListEl.className = 'perks_list';
//         perks.forEach(perk => {
//             perksListEl.innerHTML += `<li>${perk}</li>`;
//         });

//         const selectLink = document.createElement('a');
//         selectLink.className = 'select_link';
//         selectLink.href = 'javascript:void(0)';
//         selectLink.innerHTML += `
//             <span style="--delay: 0s"></span>
//             <span style="--delay: .1s"></span>
//             <span style="--delay: .2s"></span>
//             <span style="--delay: .3s"></span>
//             <span style="--delay: .4s"></span>
//         `;

//         cardEl.appendChild(cardIllustrationEl);
//         cardEl.appendChild(cardTitleEl);
//         cardEl.appendChild(cardDescriptionEl);
//         cardEl.appendChild(pricePerMonthEl);
//         cardEl.appendChild(perksListEl);
//         cardEl.appendChild(selectLink);

//         document.querySelector('main').appendChild(cardEl);
//     })
// }

// window.addEventListener('DOMContentLoaded', renderCards);
