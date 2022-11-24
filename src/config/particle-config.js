const particlesConfig =
// {
//     particles: {
//         number: {
//             value: 5,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: "#c2a978"
//         },
//         shape: {
//             type: "star",
//             stroke: {
//                 width: 0,
//                 color: "#000"
//             },
//             polygon: {
//                 nb_sides: 5
//             },
//             image: {
//                 src: "img/github.svg",
//                 width: 10,
//                 height: 10
//             }
//         },
//         opacity: {
//             value: 0.3,
//             random: true,
//             anim: {
//                 enable: false,
//                 speed: 0.71,
//                 opacity_min: 0.1298437817001421,
//                 sync: false
//             }
//         },
//         size: {
//             value: 4,
//             random: true,
//             anim: {
//                 enable: true,
//                 speed: 26.78027997565431,
//                 size_min: 37.33008723879086,
//                 sync: false
//             }
//         },
//         line_linked: {
//             enable: false,
//             distance: 320.4820049354231,
//             color: "#ffffff",
//             opacity: 1,
//             width: 11.857834182610656
//         },
//         move: {
//             enable: true,
//             speed: 5,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "bounce",
//             bounce: false,
//             attract: {
//                 enable: false,
//                 rotateX: 600,
//                 rotateY: 2243.374034547962
//             }
//         }
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: {
//                 enable: false,
//                 mode: "grab"
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push"
//             },
//             resize: true
//         },
//         modes: {
//             grab: {
//                 distance: 400,
//                 line_linked: {
//                     opacity: 1
//                 }
//             },
//             bubble: {
//                 distance: 400,
//                 size: 40,
//                 duration: 2,
//                 opacity: 8,
//                 speed: 3
//             },
//             repulse: {
//                 distance: 200,
//                 duration: 0.4
//             },
//             push: {
//                 particles_nb: 4
//             },
//             remove: {
//                 particles_nb: 2
//             }
//         }
//     },
//     retina_detect: true
// }

{
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#c2a978"
        },
        shape: {
            type: "polygon",
            stroke: {
                width: 0,
                color: "#000"
            },
            polygon: {
                nb_sides: 7
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.05608435086369905,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 384.5784059225077,
            random: false,
            anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2
        },
        move: {
            enable: true,
            speed: 8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
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
                enable: false,
                mode: "grab"
            },
            onclick: {
                enable: false,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}
export default particlesConfig