import { TitleProps } from "./typings";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { FC } from "react";
import { getEnvVariable } from "../utils";
import { globalStyles } from "../themes";
import { useTranslation } from "react-i18next";

const Title: FC<TitleProps> = () => {
  const { t } = useTranslation("pages", {
    keyPrefix: "main_page",
  });
  return (
    <>
      <div>
        <a href={getEnvVariable("VITE_URL")} target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            style={globalStyles.mlr8}
          />
        </a>
        <a href={getEnvVariable("VITE_REACT_URL")} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("title")}</h1>
    </>
  );
};
export default Title;
