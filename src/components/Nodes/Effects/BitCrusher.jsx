import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "../../../store/Store.js";
import CustomHandle from "../../Handle/CustomHandle.jsx";
import Input from "../Input.jsx";
import Button from "../Button.jsx";

const selector = (id) => (store) => ({
  setBits: (e) => {
    store.updateNode(id, { bits: +e });
  },
  setWet: (e) => {
    store.updateNode(id, { wet: +e });
  },
  removeNode: store.removeNode,
});
const BitCrusher = ({ id, data }) => {
  const { setBits, setWet, removeNode } = useStore(selector(id), shallow);
  return (
    <div className="node bitCrusher">
      <CustomHandle type={"target"} position={"top"} id={"a"} />
      <h3>BitCrusher</h3>
      <Button action={() => removeNode(id)} />
      <div className="bitCrusher__container node__container">
        <div className="knobs">
          <Input
            value={data.bits}
            setValue={setBits}
            label={"Bits"}
            min={1}
            max={8}
            step={1}
          />
          <Input
            value={data.wet}
            setValue={setWet}
            label={"Wet"}
            min={0}
            max={1}
            step={0.01}
          />
        </div>
      </div>
      <CustomHandle type={"source"} position={"bottom"} id={"b"} />
    </div>
  );
};

export default BitCrusher;
