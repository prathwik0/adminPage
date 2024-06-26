// Chat.js
import React, { useState } from 'react';
import Navbar from './styleChat/navbar';
import LatestAnnouncements from './styleChat/LatestAnnouncement';
import AboutTuition from './styleChat/AboutTution';
import AboutCourses from './styleChat/AboutCourse';
import CustomComponent from './styleChat/CustomComponent';
import FloatSquares from './Background';


function Chat() {
  const [language, setLanguage] = useState("E"); // E for English, K for Kannada

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const getTranslatedText = (englishText, kannadaText) => {
    return language === "E" ? englishText : kannadaText;
  };  
  return (
    <div className="App">
    <FloatSquares />
    <div>
      <Navbar
        getTranslatedText={getTranslatedText}
        language={language}
        changeLanguage={changeLanguage}
      />
      <div className="main-card-container">
      <LatestAnnouncements
    language={language}
    changeLanguage={changeLanguage}
    getTranslatedText={getTranslatedText}
/>
      {/* <AboutTuition
        getTranslatedText={getTranslatedText}
      /> */}
      </div>
      <AboutCourses
        getTranslatedText={getTranslatedText}
      />
      <CustomComponent
        getTranslatedText={getTranslatedText}
      />
</div>
</div>
  );
}

export default Chat;