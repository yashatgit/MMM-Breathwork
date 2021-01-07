Module.register("MMM-Breathwork", {
  start: function () {
    const self = this;
    Log.info("Now Starting module: " + self.name);
  },

  getStyles: function () {
    return ["MMM-Breathwork.css"];
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="MMM-Breathwork-outer-cir">
        <div id="MMM-Breathwork-inner-cir"></div>
        <div class="MMM-Breathwork-text-breathe MMM-Breathwork-text-breathe-in">Inhale</div>
        <div class="MMM-Breathwork-text-breathe MMM-Breathwork-text-breathe-out">Exhale</div>  
      </div>
      `;
    return wrapper;
  },
});
