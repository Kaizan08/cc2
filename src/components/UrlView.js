import React, { Component } from 'react'

export default class UrlView extends Component {
    render(){
        let urls;
        if (this.props.links.length){
            console.log(this.props.links)
            urls = this.props.links.map((item, i) => {
                return(
                    <div key={i} className="links">
                        <a href={item}>{item}</a>
                    </div>
                );
            })}
        else {
            urls = ''
        }
        return(
                <div>
                    {urls}
                </div>
            );
      }
      
}
