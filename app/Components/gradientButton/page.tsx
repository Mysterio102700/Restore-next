import React from "react";
import Styles from "@/app/Components/gradientButton/gradientButton.module.css"
interface PageProps {
  text: string;
}

const page = ({ text }: PageProps) => {
  return <button className={Styles.gradientButton}>{text}</button>;
};

export default page;
