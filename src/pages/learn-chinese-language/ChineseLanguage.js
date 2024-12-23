import bannerImage from "../../images/tq.jpg";
import LayoutLanguage from "../../components/LayoutLearnLanguage/LayoutLearnLanguage.js"
import howWorkImage from "../../images/chinese_phone.webp";
import videoImage from "../../images/Chinese-Videos.webp";
import practiceImage from "../../images/MemBot-chinese.webp";
import expertImage from "../../images/Chinese.fl.webp";
import feedbackImage1 from "../../images/phongbuoi.jpg";
import feedbackImage2 from "../../images/ngaohap.jpg";
import feedbackImage3 from "../../images/longkhoahoc.jpg";

function ChineseLanguage() {
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
            bannerTitle="Học tiếng Trung Quốc cùng Speak-Easy"
            bannerSubtitle="Gia sư ngoại ngữ AI online riêng sẽ dạy bạn nói tiếng Trung như người bản xứ."
            buttonText="Bắt đầu học"
            sloganText="Chúng tôi dạy tiếng Trung Quốc bằng bính âm và các Hán tự"
            howWorkTitle="Các bài học tiếng Trung được thiết kế riêng"
            howWorkText="Memrise sẽ dạy bạn từ vựng tiếng Trung, qua các bài học dựa trên các sở thích của bạn."
            videoTitle="Các video phù hợp với trình độ của bạn"
            videoDescription="App sẽ tìm cho bạn hàng nghìn các bài học bằng video chân thực để học tiếng Trung, trong đó có chính xác những từ bạn vừa mới học."
            practiceTitle="Thực hành không giới hạn"
            practiceDescription="Memrise sẽ cho bạn luyện tập nói không giới hạn bằng các cuộc đối thoại như với người thực, để bạn cải thiện tiếng Trung Quốc của mình (được vận hành bởi GPT-3)."
            expertTitle="Các bài học tiếng Trung của chúng tôi được thiết kế bởi các chuyên gia ngôn ngữ"
            feedbackTitle="Chia sẻ từ các học viên"
            feedbackSubtitle="Từ những chiến thắng nho nhỏ cho tới các thành tựu to lớn, đây là cách mà từng từ mới một đã giúp họ mở mang các thế giới của mình."
            feedbacks={feedbacks}
            images={images}
        />
    );
}

export default ChineseLanguage;
