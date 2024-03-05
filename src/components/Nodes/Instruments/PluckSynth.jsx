import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "../../../store/Store.js";
import CustomHandle from "../../Handle/CustomHandle.jsx";
import Input from "../Input.jsx";

const selector = (id) => (store) => ({
  setAttack: (e) => {
    store.updateNode(id, { attackNoise: +e});
  },
  setDampening: (e) => {
    store.updateNode(id, { dampening: +e });
  },
  setResonance: (e) => {
    store.updateNode(id, { resonance: +e });
  },
});
const PluckSynth = ({ id, data }) => {
  const { setAttack, setDampening, setResonance } = useStore(
    selector(id),
    shallow
  );

  return (
    <div className="node pluckSynth">
      <CustomHandle type={"target"} position={"top"} id={"a"} />
      <h3>Pluck Synth</h3>
      <div className="pluckSynth__container node__container">
        <div className="pluckSynth__controls global__controls">
          <div className="knobs">
            <Input
              value={data.attackNoise}
              setValue={setAttack}
              label={"Attack"}
              min={0.1}
              max={2}
              step={0.01}
            />
            <Input
              value={data.dampening}
              setValue={setDampening}
              label={"Dampening"}
              min={2000}
              max={6000}
              step={1}
            />
            <Input
              value={data.resonance}
              setValue={setResonance}
              label={"Résonance"}
              min={0.1}
              max={0.99}
              step={0.01}
            />
          </div>
        </div>
      </div>
      <CustomHandle type={"source"} position={"bottom"} id={"b"} />
    </div>
  );
};

export default PluckSynth;
