import React from "react";
import "./widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Edraak Academy is back", "Top-news -9,999 readers" )}
      {newsArticle("Crycto is getting up", "Top-news -876 readers" )}
      {newsArticle("Petrol price geting less", "Top-news -670 readers" )}
      {newsArticle("CoronaVirus in Pakistan", "Top-news -666 readers" )}
      {newsArticle("Is Angular is good in 2022", "Top-news -633 readers" )}
      {newsArticle("Tesla new Model", "Top-news -623 readers" )}
      {newsArticle("Space ships", "Top-news -621 readers" )}
      {newsArticle("Is redux is good?", "Top-news -666 readers" )}
      {newsArticle("We build A linkedIn", "Top-news -876 readers" )}
      {newsArticle("Petrol price geting less", "Top-news -670 readers" )}
      {newsArticle("Nextjs new Feature", "Top-news -666 readers" )}

      

    </div>
  );
}

export default Widgets;
