import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";

import { useStore } from "../../../store/Store.js";
import CustomHandle from "../../Handle/CustomHandle.jsx";
import Input from "../../utils/Input.jsx";
import Button from "../../utils/Button.jsx";
import Infobulle from "../../utils/Infobulle.jsx";

const selector = (id) => (store) => ({
  setGain: (e) => store.updateNode(id, { gain: +e }),
  removeNode: store.removeNode,
});

const GainNode = ({ id, data }) => {
  const { setGain, removeNode } = useStore(selector(id), shallow);
  return (
    <div className="node gainnode">
      <CustomHandle type={"target"} position={"top"} id={"a"} />
      <Infobulle titre="Gain">
        <>
          This is a gain node. It changes the volume of the sound.
        </>
      </Infobulle>
      <Button action={() => removeNode(id)} />
      <h3>Gain</h3>
      <div className="gainnode__container node__container">
        <div className="knobs">
          <Input
            value={data.gain}
            setValue={setGain}
            label={"Gain"}
            min={0}
            max={2}
            step={0.01}
          />
        </div>
      </div>
      <CustomHandle type={"source"} position={"bottom"} id={"b"} />
    </div>
  );
};

export default GainNode;
