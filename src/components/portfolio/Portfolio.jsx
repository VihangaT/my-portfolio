import {React,useState,useEffect} from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./portfolio.scss"
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from "../../data.js"

export default function Portfolio() {
    const [data, setdata] = useState([])
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          },
          {
            id: "mobile",
            title: "Mobile App",
          },
          {
            id: "design",
            title: "Design",
          },
          {
            id: "content",
            title: "Content",
          }
    ]

    useEffect(() => {
        switch(selected){
            case "featured":
                setdata(featuredPortfolio);
                break;
            case "web":
                setdata(webPortfolio);
                break;
            case "mobile":
                setdata(mobilePortfolio);
                break;
            case "design":
                setdata(designPortfolio);
                break;
            case "content":
                setdata(contentPortfolio);
                break; 
            default:
                setdata(featuredPortfolio)     
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
            {list.map((item) => (
                <PortfolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
            ))}
        </ul>
        <div className="container">
        {data.map((d) =>(
            <div className="item" key={d.id}>
                <img src={d.img} alt={d.title} />
                <h3>{d.title}</h3>
            </div>
        ))}

        </div>
        
        </div>
    )
}
