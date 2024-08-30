import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from "react-icons/bi";

const course = [
  {
    title: "Web Development",
    icon: <BiLogoHtml5 />,
  },
  {
    title: "App Development",
    icon: <BiLogoAndroid />,
  },
  {
    title: "UX % UI",
    icon: <BiBuilding />,
  },
];

const Card = () => {
    return (
      <div className='card--container'>
        {course.map((item) => (
          <div key={item.title} className='card'>
            <div className='card--cover'>{item.icon}</div>
            <h2 className='title'>{item.title}</h2>
          </div>
        ))}
      </div>
    );
  }
  

export default Card;
