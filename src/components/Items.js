import React,{Component} from 'react';
// import articles from "./api.json";

export default class Items extends Component{
    
    // constructor(){
    //     super();
    //     this.state = {
    //         article:this.articles
    //     }
    // }
    render(){
        let {title,description,urlToImage,url}=this.props;
        return(
            <>
                <div className="card" style={{width: "18rem"}} onClick={(f)=>{
                    
                }}>
                    <img src={urlToImage} className="card-img-top" alt="pic"/>
                    <h2>{title}</h2>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </>
        )
    }
}