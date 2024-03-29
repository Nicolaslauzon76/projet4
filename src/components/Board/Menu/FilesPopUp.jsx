import React from "react";
import { useSaveAndLoad } from "../../../context/SaveAndLoadContext";
import Button from "../../utils/Button";
import DeleteTrash from "../../utils/DeleteTrash";

const FilesPopUp = () => {
  const { projects, setSeeFiles, loadProject, removeProject } =
    useSaveAndLoad();
  return (
    <>
      <Button action={() => setSeeFiles(false)} classe={"file"} type="file"/>
      <div className="files-popup">
        <div className="files-popup__container">
          <h2>Load Project</h2>
          <ul>
            {projects &&
              projects.map((project, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setSeeFiles(false);
                      loadProject(project.id);
                    }}
                  >
                    <p>{project.name}</p>
                    <div
                      className="icone"
                      onClick={(e) => {
                        removeProject(project.id), e.stopPropagation();
                      }}
                    >
                      <DeleteTrash />
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilesPopUp;
