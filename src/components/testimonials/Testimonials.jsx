import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Đức Tài",
      title: "Life is one time offer, use it well",
      img: "https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg",
      icon: "assets/facebook.png",
      desc: "This account to use contact, chat with friend.",
      link: "https://www.facebook.com/duc.tai.12345",
    },
    {
      id: 2,
      name: "Tìu",
      title: "Remember to be happy",
      img: "https://st.quantrimang.com/photos/image/2021/08/16/Anh-vit-cute-1.jpg",
      icon: "assets/instagram.png",
      desc: "This account to upload beauty image. ",
      link: "https://www.instagram.com/elnino.112/",
      featured: true,
    },
    {
      id: 3,
      name: "Vo Duc Tai",
      title: "Life is about creating yourself",
      img: "https://firebasestorage.googleapis.com/v0/b/ductai-porfolio.appspot.com/o/162378291_3240723939487237_1192165099136816805_n.jpg?alt=media&token=5d9c5573-e518-4101-b4fb-d3b3bf3795fc",
      icon: "assets/linkedin.png",
      desc: "This account to spend for work.",
      link: "https://www.linkedin.com/in/vo-duc-tai-49510221a/",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>About Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>
                <a href={d.link}>{d.name}</a>
              </h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
