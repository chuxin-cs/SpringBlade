import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

export default function LayoutMenu() {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`/hooks/${e.key}`);
  };

  const items: MenuItem[] = [
    {
      key: "hooks",
      label: "hooks",
      icon: <SettingOutlined />,
      children: [
        { key: "useState", label: "useState" },
        { key: "useBoolean", label: "useBoolean" },
        { key: "useHover", label: "useHover" },
        { key: "useSize", label: "useSize" },
        { key: "useTitle", label: "useTitle" },
        { key: "useToggle", label: "useToggle" },
        { key: "useUnmount", label: "useUnmount" },
      ],
    },
  ];

  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: "100%" }}
        mode="inline"
        items={items}
      />
    </>
  );
}
