import React from "react";
import "./LayoutLearnLanguage.css";

function LanguageDefault({
    bannerTitle,
    bannerSubtitle,
    buttonText,
    sloganText,
    howWorkTitle,
    howWorkText,
    videoTitle,
    videoDescription,
    practiceTitle,
    practiceDescription,
    expertTitle,
    feedbackTitle,
    feedbackSubtitle,
    feedbacks,
    images,
}) {
    return (
        <div className="default">
            <div className="banner-default">
                <div className="banner-left-default">
                    <div className="text-default">
                        <h1>{bannerTitle}</h1>
                        <img
                            className="lazy"
                            alt="blue underline"
                            src="https://f.hubspotusercontent20.net/hubfs/6968579/Memrise%20July%202020/Images/blue-flash.svg"
                        />
                        <p>{bannerSubtitle}</p>
                    </div>
                    <div className="btn-start-default">
                        <button>{buttonText}</button>
                    </div>
                </div>
                <div className="image-banner-default">
                    <div className="image-default">
                        <img src={images.bannerImage} alt="Banner" />
                    </div>
                </div>
            </div>

            <div className="slogan">
                <h1>{sloganText}</h1>
            </div>

            <div className="how-work-default">
                <div className="how-work-title-default">
                    <h1>{howWorkTitle}</h1>
                </div>
                <div className="list-work-default">
                    <div className="image-work-default">
                        <img src={images.howWorkImage} alt="How It Works" />
                    </div>
                    <div className="text-work-default">
                        <ul>
                            <li>
                                <span>{howWorkText}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-0">
                <div className="ab-0-img">
                    <img src={images.videoImage} alt="Video" />
                </div>
                <div className="ab-0-text">
                    <p>{videoTitle}</p>
                    <span>{videoDescription}</span>
                </div>
            </div>

            <div className="practice">
                <div className="practice-text">
                    <h2>{practiceTitle}</h2>
                    <span>{practiceDescription}</span>
                </div>
                <div className="practice-img">
                    <img src={images.practiceImage} alt="Practice" />
                </div>
            </div>

            <div className="about">
                <div className="about-text">
                    <h1>{expertTitle}</h1>
                </div>
                <div className="about-img">
                    <img src={images.expertImage} alt="Expert" />
                </div>
            </div>

            <div className="feedback-default">
                <div className="feedback-title-default">
                    <div className="feedback-title-left-default">
                        <h1>{feedbackTitle}</h1>
                    </div>
                    <div className="feedback-title-right-default">
                        <h3>{feedbackSubtitle}</h3>
                    </div>
                </div>
                <div className="feedback-list-default">
                    {feedbacks.map((feedback, index) => (
                        <div key={index} className="feedback-item-default">
                            <div className="avt-default">
                                <img src={feedback.image} alt={feedback.name} />
                            </div>
                            <div className="feedback-text-default">
                                <span>{feedback.text}</span>
                            </div>
                            <div className="name-user-default">
                                <h4>{feedback.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LanguageDefault;
