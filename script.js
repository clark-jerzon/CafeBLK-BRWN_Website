/* ==========================================================================
   Café BLK & BRWN: main JavaScript
   --------------------------------------------------------------------------
   Progressive enhancement only. Every page works without this file; it adds:
   1. a collapsible navigation on small screens
   2. progress tracking on the reservation form
   3. branch pre-selection and a minimum date on the reservation form
   ========================================================================== */

(function () {
  "use strict";

  /* Mark the document so CSS can tell that JavaScript is available. */
  document.documentElement.classList.add("js");

  /* ---- 1. Mobile navigation ------------------------------------------- */
  function initNavigation() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      var icon = toggle.querySelector(".icon");
      if (icon) {
        icon.classList.toggle("i-menu", !open);
        icon.classList.toggle("i-x", open);
      }
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  /* ---- 2. Reservation form progress ----------------------------------- */
  /* The form has three <fieldset data-step> groups. A step counts as complete
     when all of its required fields are valid. */
  function initReservationProgress() {
    var form = document.getElementById("reservation-form");
    if (!form) return;

    var steps = Array.prototype.slice.call(form.querySelectorAll("[data-step]"));
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-flow-step]"));
    var bar = document.querySelector("[data-progress]");
    var fill = document.querySelector("[data-progress-fill]");
    var label = document.querySelector("[data-progress-label]");
    var current = document.querySelector("[data-step-current]");
    if (!steps.length || !bar || !fill) return;

    function isComplete(step) {
      var required = step.querySelectorAll("[required]");
      return Array.prototype.every.call(required, function (field) {
        return field.value.trim() !== "" && field.checkValidity();
      });
    }

    function update() {
      var done = 0;
      var firstOpen = -1;
      steps.forEach(function (step, index) {
        var complete = isComplete(step);
        if (complete) done += 1;
        else if (firstOpen === -1) firstOpen = index;
        if (items[index]) {
          items[index].classList.toggle("is-done", complete);
          items[index].classList.toggle("is-current", !complete && index === firstOpen);
        }
      });

      var percent = Math.round((done / steps.length) * 100);
      fill.style.setProperty("--value", percent + "%");
      bar.setAttribute("aria-valuenow", String(percent));
      if (label) label.textContent = percent + "% complete";
      if (current) current.textContent = String(Math.min(done + 1, steps.length));
    }

    form.addEventListener("input", update);
    form.addEventListener("change", update);
    update();
  }

  /* ---- 3. Reservation form defaults ----------------------------------- */
  function initReservationDefaults() {
    var form = document.getElementById("reservation-form");
    if (!form) return;

    /* Do not allow dates in the past. */
    var date = form.querySelector('input[type="date"]');
    if (date) {
      var today = new Date();
      var iso = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
      date.min = iso;
    }

    /* Branch links use reserve.html?branch=naic and so on. */
    var branch = new URLSearchParams(window.location.search).get("branch");
    var select = form.querySelector('select[name="branch"]');
    if (branch && select) {
      var option = select.querySelector('option[data-slug="' + branch + '"]');
      if (option) {
        select.value = option.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  }

  initNavigation();
  initReservationProgress();
  initReservationDefaults();
})();
