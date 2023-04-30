import { useEffect, useState } from "react";
import { useDataStore } from "../../store/data";
import { Tree, TreeNode } from "react-organizational-chart";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import styles from "./OrganizationChart.module.scss";
import { TEXT } from "../../strings";

export const OrganizationChart = () => {
  const [treeData, setTreeData] = useState([]);
  const data = useDataStore((state) => state.filteredData);

  function generateTree(items) {
    let tree = [],
      mappedArr = {},
      arrElem,
      mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for (let i = 0, len = items.length; i < len; i++) {
      arrElem = items[i];
      mappedArr[arrElem.ID] = arrElem;
      mappedArr[arrElem.ID]["children"] = [];
    }

    for (let ID in mappedArr) {
      // eslint-disable-next-line no-prototype-builtins
      if (mappedArr.hasOwnProperty(ID)) {
        mappedElem = mappedArr[ID];
        // If the element is not at the root level, add it to its parent array of children.
        if (mappedElem.ID_Lider !== 324532) {
          mappedArr[mappedElem["ID_Lider"]]["children"].push(mappedElem);
        }
        // If the element is at the root level, add it to first level elements array.
        else {
          tree.push(mappedElem);
        }
      }
    }
    return tree;
  }

  useEffect(() => {
    const result = generateTree(data);
    setTreeData(result);
  }, [data]);

  const renderTreeNode = (node) => {
    return (
      <TreeNode
        key={`tree-one-${node.Nombre}-${node.Mes}`}
        label={<ProfileCard {...node} />}
      >
        {node.children.length > 0
          ? node.children.map((child) => renderTreeNode(child))
          : null}
      </TreeNode>
    );
  };

  return (
    <div className={styles.container}>
      <Tree label={<h2 className={styles.title}>{TEXT.ORGANIZATION_CHART}</h2>}>
        {treeData.map((item) => renderTreeNode(item))}
      </Tree>
    </div>
  );
};
