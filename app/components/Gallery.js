import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return(
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        let alternateImage = 'https://cdn2.iconfinder.com/data/icons/symbol-blue-set-3/100/Untitled-1-94-128.png';
                        return (
                            <a 
                                key={index} 
                                className="book"
                                href={infoLink}
                                target="_blank"
                            >
                                <img
                                    src={imageLinks !== undefined? imageLinks.thumbnail : alternateImage} 
                                    alt="book image" 
                                    className="book-img"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        );
    }
} 

export default Gallery;