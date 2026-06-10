// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap’s JS
// @ts-ignore
import * as bootstrap from "bootstrap";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="container-fluid d-flex p-4 align-content-center justify-content-center">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Vite + Vanilla TS + Bootstrap</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Project Template</h6>
    <p class="card-text">Check out the documentation to start coding your next
                    project.</p>
    <a target="_blank" rel="noopener noreferrer" href="https://vite.dev/" class="card-link">Vite</a>
    <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/" class="card-link">Bootstrap</a>
  </div>
</div>
</div>
`;
