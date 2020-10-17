import React, {Component} from 'react';



class HeaderItem extends Component{

    render() {
        return (
            <div className="header-item">
                <a href={this.props.href} target={this.props.target}>{this.props.text}</a>
            </div>
        )
    }
}
export default HeaderItem;