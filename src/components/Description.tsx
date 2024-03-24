import { FC } from "react";
import { DescriptionProps } from "./typings";
import { useCount } from "../hooks";
import { useTranslation } from "react-i18next";

const Description: FC<DescriptionProps> = () => {
  const { t } = useTranslation("pages", {
    keyPrefix: "main_page",
  });
  const { count, incrementCount } = useCount();
  return (
    <>
      <div className="card">
        <button onClick={incrementCount}>
          {t("count_des", {
            count,
          })}
        </button>
        <p>
          {t("edit_des")} <code>{t("edit_file_des")}</code> {t("save_file_des")}
        </p>
      </div>
      <p className="read-the-docs">{t("content")}</p>
    </>
  );
};
export default Description;
