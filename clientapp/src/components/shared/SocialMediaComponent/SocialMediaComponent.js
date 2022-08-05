import caption from '../../../assets/img/caption.svg';
import mail from '../../../assets/img/mail.svg';
import github from '../../../assets/img/github.svg';
import linkedin from '../../../assets/img/linkedin.svg';

const SocialMediaComponent = () => {

    const images = [
        { imgUrl: mail, url: "mailto:joekanesiew@outlook.com" },
        { imgUrl: github, url: "https://github.com/JakeSiewJK64" },
        { imgUrl: linkedin, url: "https://www.linkedin.com/in/jake-siew-joe-kane-a411811b5/" },
    ];

    const githubProf = "https://avatars.githubusercontent.com/u/47139291?v=4";

    return (
        <div className="d-flex flex-column mt-5">
            <img src={githubProf} alt="github_profile" className="rounded-circle w-25 mx-auto" />
            <img src={caption} alt="caption" style={{ "height": "300px" }} className="mt-3" />
            {
                images.map(image => {
                    return (
                        <a href={image.url} className="mt-1 mx-auto" style={{ "width": "30px" }} target="_blank" rel="noreferrer">
                            <img src={image.imgUrl} alt="socialmedia" />
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SocialMediaComponent;