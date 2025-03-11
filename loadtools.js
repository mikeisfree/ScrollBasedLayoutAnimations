export async function loadTools() {
  const response = await fetch(
    "/src/modules/scrollbasedanim/ScrollBasedLayoutAnimations/index.html"
  );
  const html = await response.text();
  const toolsContainer = document.querySelector(".tools");
  toolsContainer.innerHTML = html;
}
