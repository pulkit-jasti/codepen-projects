/* ---- particles.js config ---- */

particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },

      color: {
        value: ["#3174f1", "#e63125", "#f6ad01", "#249a41"]
      },

      shape: {
        type: ["circle"],
        stroke: {
          width: 0,
          color: "#fff"
        },
        polygon: {
          nb_sides: 5
        }
      },

      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },

      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 10,
          sync: false
        }
      },

      line_linked: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },

      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },


    interactivity: {
      detect_on: "canvas",
      
      events: {
        onhover: {
          enable: true,
          mode: "push"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },

      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },

        repulse: {
          distance: 200,
          duration: 0.4
        },

        remove: {
          particles_nb: 2
        }
      }
    },

    retina_detect: true
});