import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "../../../store/Store.js";
import CustomHandle from "../../Handle/CustomHandle.jsx";
import Input from "../Input.jsx";
import RadioInputs from "../RadioInputs.jsx";
import ModulationSection from "../ModulationSection.jsx";
import svgs from "../../../assets/img/svg/svg.jsx";
import Button from "../Button.jsx";

const selector = (id, data) => (store) => ({
  setDetune: (e) => {
    store.updateNode(id, { detune: +e });
  },
  setOscillatorType: (e) => {
    store.updateNode(id, {
      oscillator: {
        type: e
      },
    });
  },
  setEnvelope(type, value) {
    store.updateNode(id, {
      envelope: { [type]: +value },
    });
  },
  setFilterEnvelope(type, value) {
    store.updateNode(id, {
      filterEnvelope: { [type]: +value },
    });
  },
  removeNode: store.removeNode,
});
const MonoSynth = ({ id, data }) => {
  const {
    setDetune,
    setOscillatorType,
    setEnvelope,
    setFilterEnvelope,
    removeNode
  } = useStore(selector(id, data), shallow);
  return (
    <div className="node monoSynth">
      <CustomHandle type={"target"} position={"top"} id={"a"} />
      <Button action={() => removeNode(id)} />
      <h3>Mono Synth</h3>
      <div className="monoSynth__container node__container">
        <div className="monoSynth__controls global__controls">
          <h4>Global</h4>
          <div className="knobs">
            <Input value={data.detune} setValue={setDetune} label={"Detune"} min={-3000} max={3000} step={1} />
          </div>
        </div>
        <section className="voices">
          <div className="voice">
            <section className="envelopeSection">
              <div className="type">
                <h4>Oscillator</h4>
                <RadioInputs options={svgs} selected={data.oscillator.type} setSelected={setOscillatorType} type={"svg"} label={"Oscillator"} />
              </div>
              <div className="envelopes">
                <div className="left side">
                  <h4>Envelope</h4>
                  <ModulationSection envelope={data.envelope} setEnvelope={setEnvelope} />
                </div>
                <div className="right side">
                  <h4>Filter Envelope</h4>
                  <ModulationSection envelope={data.filterEnvelope} setEnvelope={setFilterEnvelope} />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <CustomHandle type={"source"} position={"bottom"} id={"b"} />
    </div>
  );
};

export default MonoSynth;
