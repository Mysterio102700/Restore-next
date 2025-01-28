import React from 'react'
import Styles from "@/app/Components/gradientButton/gradientButton.module.css";


interface GradientButtonProps {
  buttonText: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({buttonText}) => {
  if (!buttonText) {
    buttonText = "Book Appointment"
  }
  return (
     <button className={Styles.gradientButton}>{buttonText}</button>
  )
}

export default GradientButton