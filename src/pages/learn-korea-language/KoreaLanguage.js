import bannerImage from "../../images/korea_flag.png";
import LayoutLanguage from "../../components/LayoutLearnLanguage/LayoutLearnLanguage.js"
import howWorkImage from "../../images/Korean_Learn_Mobile.webp";
import videoImage from "../../images/Korean_Videos.webp";
import practiceImage from "../../images/Korean-MemBot-Chat.webp";
import expertImage from "../../images/Korean-Flag-mini.webp";
import feedbackImage1 from "../../images/phongbuoi.jpg";
import feedbackImage2 from "../../images/ngaohap.jpg";
import feedbackImage3 from "../../images/longkhoahoc.jpg";

function KoreaLanguage() {
    const feedbacks = [
        {
            image: feedbackImage1,
            text: "App rất bổ ích cho người mới bắt đầu",
            name: "Đào Hải Phong",
        },
        {
            image: feedbackImage2,
            text: "Ứng dụng hay và học tiếng Trung rất tốt",
            name: "Phạm Thắng",
        },
        {
            image: feedbackImage3,
            text: "Rất tiện ích, phù hợp với mọi người",
            name: "Anh Long",
        },
    ];

    const images = {
        bannerImage,
        howWorkImage,
        videoImage,
        practiceImage,
        expertImage,
    };

    return (
        <LayoutLanguage
            bannerTitle="Học tiếng Hàn Quốc cùng Speak-Easy"
            bannerSubtitle="Gia sư ngoại ngữ AI online riêng sẽ dạy bạn nói tiếng Hàn như người bản xứ."
            buttonText="Bắt đầu học"
            sloganText="Chúng tôi dạy tiếng Hàn Quốc bằng cả trái tim"
            howWorkTitle="Các bài học tiếng Hàn được thiết kế riêng"
            howWorkText="Memrise sẽ dạy bạn từ vựng tiếng Hàn, qua các bài học dựa trên các sở thích của bạn."
            videoTitle="Các video phù hợp với trình độ của bạn"
            videoDescription="App sẽ tìm cho bạn hàng nghìn các bài học bằng video chân thực để học tiếng Hàn, trong đó có chính xác những từ bạn vừa mới học."
            practiceTitle="Thực hành không giới hạn"
            practiceDescription="Memrise sẽ cho bạn luyện tập nói không giới hạn bằng các cuộc đối thoại như với người thực, để bạn cải thiện tiếng Hàn Quốc của mình (được vận hành bởi GPT-3)."
            expertTitle="Các bài học tiếng Hàn của chúng tôi được thiết kế bởi các chuyên gia ngôn ngữ"
            feedbackTitle="Chia sẻ từ các học viên"
            feedbackSubtitle="Từ những chiến thắng nho nhỏ cho tới các thành tựu to lớn, đây là cách mà từng từ mới một đã giúp họ mở mang các thế giới của mình."
            feedbacks={feedbacks}
            images={images}
        />
    );
}

export default KoreaLanguage;
