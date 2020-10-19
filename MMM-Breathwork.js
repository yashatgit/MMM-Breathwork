const breathPatterns = {
  magic: [
    { millis: 5.5 * 1000, text: "inhale", mode: "inhale" },
    { millis: 5.5 * 1000, text: "exhale", mode: "exhale" },
  ],
};

Module.register("MMM-Breathwork", {
  start: function () {
    const self = this;
    Log.info("Now Starting module: " + self.name);

    setTimeout(() => {
      self.initModule();
    }, 2000);
  },

  getStyles: function () {
    return ["MMM-Breathwork.css"];
  },

  getDom: function () {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <div id="MMM-Breathwork-outer-cir">
        <div id="MMM-Breathwork-inner-cir">    
        </div>
        <div id="MMM-Breathwork-cir-txt">breathe</div>
      </div>
      `;
    return wrapper;
  },

  initModule: function () {
    const innerCircle = document.getElementById("MMM-Breathwork-inner-cir");
    const circleText = document.getElementById("MMM-Breathwork-cir-txt");

    const startBreath = (breathConfig) => {
      const totalBreathSpan = breathConfig.reduce(
        (acc, i) => acc + i.millis,
        0
      );
      const updateNode = (config) => {
        circleText.innerHTML = config.text;
        innerCircle.setAttribute("data-mode", config.mode);
        console.log(+new Date());
      };

      setInterval(() => {
        updateNode(breathConfig[0]);
      }, totalBreathSpan);

      setTimeout(() => {
        setInterval(() => {
          updateNode(breathConfig[1]);
        }, totalBreathSpan);
      }, breathConfig[0].millis);
    };
    startBreath(breathPatterns.magic);
  },
});
