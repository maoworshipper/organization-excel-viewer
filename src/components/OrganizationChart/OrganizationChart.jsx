import { useEffect, useState } from "react";
import { useDataStore } from "../../store/data";
import { useLanguageStore } from "../../store/language";
import { Tree, TreeNode } from "react-organizational-chart";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { generateTree } from "../../utils/generateTree";
import styles from "./OrganizationChart.module.scss";
import { TEXT } from "../../strings";

export const OrganizationChart = () => {
  const [treeData, setTreeData] = useState([]);
  const data = useDataStore((state) => state.filteredData);
  const language = useLanguageStore((state) => state.language);

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
      <Tree
        label={
          <h2 className={styles.title}>{TEXT[language].ORGANIZATION_CHART}</h2>
        }
      >
        {treeData.map((item) => renderTreeNode(item))}
      </Tree>
    </div>
  );
};
