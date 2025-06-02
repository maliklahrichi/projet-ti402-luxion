const citations = [
  "« L’innovation distingue un leader d’un suiveur. » – Steve Jobs",
  "« Le luxe, ce n’est pas le contraire de la pauvreté, mais celui de la vulgarité. » – Coco Chanel",
  "« La qualité n’est jamais un accident. C’est toujours le résultat d’un effort intelligent. » – John Ruskin",
  "« Quand quelque chose est suffisamment important, vous le faites même si les chances ne sont pas en votre faveur. » – Elon Musk",
  "« Le design, ce n’est pas seulement ce à quoi ça ressemble. C’est aussi comment ça fonctionne. » – Steve Jobs",
  "« L'élégance est quand l'intérieur est aussi beau que l'extérieur. » – Gabrielle Chanel"
];

document.addEventListener("DOMContentLoaded", () => {
  const quote = citations[Math.floor(Math.random() * citations.length)];
  console.log("Citation sélectionnée :", quote);
  document.getElementById("quote-section").innerText = quote;
});

