function selectTheme(theme) {
    const paletteContainer = document.getElementById("palette-container");
    const colorPalette = document.getElementById("color-palette");
  
    const palettes = {
        ocean: ["#334EAC", "#7096D1", "#E8F9FF", "#BAD6EB", "#F7F2EB", "#009AC7"], // From your first image
        sunset: ["#FF6A00", "#F29F05", "#D17F00", "#F9A62E", "#F9D59C", "#F3D6A2"], // Kept as is
        matcha: ["#8D9B4B", "#A9C96B", "#B0DDA4", "#E0F1BB", "#AACF91", "#728F4A"], // Kept as is
        bubblepop: ["#F8A2B8", "#FF758F", "#FF99CC", "#F9C0D3", "#F4CCCC", "#FF1493"], // From your second image
        cosmic: ["#3A2C51", "#5C4369", "#FFF2CC", "#52359C", "#3D2F6B", "#B4A9F1"], // From your third image
        mocha: ["#6F4F37", "#9C6B3C", "#C8A597", "#D9B29B", "#E2D0A2", "#F6ECC0"] // From your fourth image
      
    };
  
    // Clear existing swatches
    paletteContainer.innerHTML = "";
  
    // Add new swatches with copy functionality
    palettes[theme].forEach(color => {
      const swatch = document.createElement("div");
      swatch.classList.add("color-swatch");
      swatch.style.backgroundColor = color;
  
      // Add click event to copy color
      swatch.addEventListener("click", () => {
        navigator.clipboard.writeText(color).then(() => {
          // Optional: show a "Copied!" message
          const copiedTooltip = document.createElement("span");
          copiedTooltip.classList.add("copied-tooltip");
          copiedTooltip.textContent = "Copied!";
          swatch.appendChild(copiedTooltip);
          
          // Hide the tooltip after 1 second
          setTimeout(() => {
            swatch.removeChild(copiedTooltip);
          }, 1000);
        });
      });
  
      paletteContainer.appendChild(swatch);
    });
  
    // Position the palette next to the clicked card
    const selectedCard = document.querySelector(`.theme-card[onclick="selectTheme('${theme}')"]`);
    const cardRect = selectedCard.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    colorPalette.style.left = `${cardRect.right + 20}px`;
    colorPalette.style.top = `${cardRect.top + scrollTop}px`;
    colorPalette.style.display = "grid";
  }
  