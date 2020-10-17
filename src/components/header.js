import React, {Component} from 'react';
import HeaderItem from './headerItem';




class Header extends Component{
 
    render() {
        let items = [
            { 
                href: '/projects',
                target: '_blank',
                text: 'Projects'
            },
            {
                href: '/portfolio',
                target: '_blank',
                text: 'Portfolio'
            }
        ]

        return (
             items.map((item, index)  => (
                <HeaderItem href={item.href} target={item.target} text={item.text} key={index} />
            ))
        )
    }
}
export default Header;