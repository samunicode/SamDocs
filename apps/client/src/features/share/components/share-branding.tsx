import { Affix, Button, useMantineColorScheme } from "@mantine/core";
import React from "react";

export default function ShareBranding() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  // 🔁 Replace with your actual logo URLs
  const logoUrl = isDark
    ? "https://www.sameer.nz/samdoc_l.webp"
    : "https://www.sameer.nz/samdoc_d.webp";

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Button
        variant="default"
        component="a"
        target="_blank"
        href="https://sameer.nz"
        style={{
          padding: "4px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
        }}
      >
        <img
          src={logoUrl}
          alt="SamDocs"
          style={{
            height: "16px",
            objectFit: "contain",
            userSelect: "none",
            transition: "all 0.3s ease",
          }}
        />
      </Button>
    </Affix>
  );
}
