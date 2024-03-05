import { shallow } from "zustand/shallow";
import { useStore } from "../../../store/Store.js";
import CustomHandle from "../../Handle/CustomHandle.jsx";
import RadioInputs from "../RadioInputs.jsx";
import svgs from "../../../assets/img/svg/svg.jsx";
import ModulationSection from "../ModulationSection.jsx";
import Input from "../Input.jsx";

const selector = (id, data) => (store) => ({
  setPitchDecay: (e) => {
    store.updateNode(id, { pitchDecay: +e });
  },
  setOctaves: (e) => {
    store.updateNode(id, { octaves: +e});
  },
  setOscillatorType: (e) => {
    store.updateNode(id, {
      oscillator: {
        type: e,
      },
    });
  },
  setEnvelope: (type, value) => {
    store.updateNode(id, {
      envelope: { [type]: +value },
    });
  },
});
const MembraneSynth = ({ id, data }) => {
  const {
    setOctaves,
    setOscillatorType,
    setEnvelope,
    setPitchDecay,
  } = useStore(selector(id, data), shallow);
  return (
    <div className="node membraneSynth">
      <CustomHandle type={"target"} position={"top"} id={"a"} />
      <h3>Membrane Synth</h3>
      <div className="membraneSynth__container node__container">
        <div className="side left">
          <section className="membraneSynthoscilator envelopeSection">
            <div className="type">
              <h4>oscillator</h4>
              <RadioInputs options={svgs} selected={data.oscillator.type} setSelected={setOscillatorType} type={"svg"} />
            </div>
            <ModulationSection envelope={data.envelope} setEnvelope={setEnvelope} />
          </section>
        </div>
        <div className="side right">
          <div className="knobs">
            <Input value={data.pitchDecay} setValue={setPitchDecay} label={"Pitch Decay"} min={0.1} max={0.99} step={0.01} />
            <Input value={data.octaves} setValue={setOctaves} label={"Octaves"} min={0.1} max={20} step={0.01} />
          </div>
        </div>
      </div>
      <CustomHandle type={"source"} position={"bottom"} id={"b"} />
    </div>
  );
};

export default MembraneSynth;
