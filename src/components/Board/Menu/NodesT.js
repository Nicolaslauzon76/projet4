const menuProject = [
    {
        name: "Projet",
        children: [
            {
                name: "Save project",
                type: "save",
            },
            {
                name: "Load project",
                type: "load",
            },
        ],
    },
];
const menu = [
    {
        name: "Rythme et Séquence",
        children: [
            {
                name: "Sequencer",
                type: "sequencer",
            },
            {
                name: "BPM",
                type: "bpm",
            }
        ],
    },
    {
        name: "Instruments",
        children: [
            {
                name: "Sampler",
                type: "sampler",
            },
            {
                name: "AM Synth",
                type: "amSynth",
            },
            {
                name: "FM Synth",
                type: "fmSynth",
            },
            {
                name: "Duo Synth",
                type: "duoSynth",
            },
            {
                name: "Mono Synth",
                type: "monoSynth",
            },
            {
                name: "Membrane Synth",
                type: "membraneSynth",
            },
            {
                name: "Pluck Synth",
                type: "pluckSynth",
            }
        ],
    },
    {
        name: "Effets",
        children: [
            {
                name: "Gain",
                type: "gain",
            },
            {
                name: "Filter",
                type: "autoFilter",
            },
            {
                name: "Reverb",
                type: "reverb",
            },
            {
                name: "Delay",
                type: "feedbackDelay",
            },
            {
                name: "PitchShift",
                type: "pitchShift",
            },
            {
                name: "BitCrusher",
                type: "bitCrusher",
            },
            {
                name: "Cheby",
                type: "cheby",
            },
            {
                name: "Add",
                type: "add",
            },
            {
                name: "Chorus",
                type: "chorus",
            },
        ],
    },

    {
        name: "Audio",
        children: [
            {
                name: "Output",
                type: "out",
            },
        ],
    }
];

export { menu, menuProject };