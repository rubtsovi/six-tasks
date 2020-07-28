// Test import of a JavaScript function, an SVG, and Sass
import "bootstrap/js/dist/collapse";
import "scroll-track";
import $ from "jquery";

import "./styles/index.scss";
import scrollTrack from "scroll-track";

const nav = document.querySelector("#site-nav");
const navPlaceholder = document.querySelector("#site-nav-placeholder");
const aside = document.querySelector("#page-aside");
const navTracker = scrollTrack.create(nav);

navPlaceholder.style.height = `${nav.clientHeight}px`;
aside.style.top = `${nav.clientHeight + 20}px`;

navTracker.on("state-change", () => {
  const $logo = $(nav).find(".site-logo");
  if (navTracker.isAboveViewport) {
    nav.classList.add("position-fixed");
    navPlaceholder.classList.remove("d-none");
    $logo.show(300);
  } else {
    nav.classList.remove("position-fixed");
    navPlaceholder.classList.add("d-none");
    $logo.hide(300);
  }
});
