import React from "react";
import '../style/main.css'

export const Footer = ({ copyright }) => {
  return (
    <footer className="main-footer">
        <div>
            <h2>{copyright}</h2>
        </div>
    </footer>
  );
};