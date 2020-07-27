import React,{useState} from 'react'

import { CSSTransition } from 'react-transition-group';
import '../assets/scss/ImageDetail.scss';
import LinkedIn from '../assets/svg/linkedin.svg';
import Facebook from '../assets/svg/facebook.svg';

function ImageDetail(props) {
  const [inProp, setInProp] = useState(false);
  const result = props.img; //detail of the item
  const index = props.imgIndex; // index of each image
  const imgNum = props.selectedIndex; // index of selected image
  const arrayLength = props.len; // length of the array
  const displayDetail = props.displayImgDetail; 
  let divDetail = '';

  let nextDivisible = 3 + (imgNum - (imgNum%3)) - 1; // next divisible number by 3
  let previousDivisible = 3 + (imgNum - (imgNum%3)) - 4; // previous divisible number by 3

  if ( result.id ) {
    // checking if an index is divisible by 3 or if index is the last index in an array
    if ( props.imgIndex % 3 === 2 || index === arrayLength ) {
      if( nextDivisible >= index && previousDivisible < index ) {
        setTimeout(() => {
          setInProp(true)
        }, 0);
        divDetail = <div className = "row mx-0 px-1 pb-5">
                        <div className = "card border-0 shadow-sm w-100 text-left">
                          <CSSTransition key={result.id} in={inProp} timeout={100} classNames="description">
                           { inProp ?  
                            <div className = "card-body">
                              <span type = "button" className = "close" aria-label = "Close" onClick={(e) => displayDetail({},'')}>
                                <span className = "px-1 text-light bg-dark" aria-hidden = "true">&times;</span>
                              </span>
                              <h6 className = "card-title font-weight-bold"> Image history </h6>
                                <p className = "history"> {result.description} </p>
                              <div className = "pt-5 w-100 d-flex justify-content-end">
                              <div className = "justify-content-center">
                                <img src = {Facebook} alt="Facebook"/>
                                <img src = {LinkedIn} alt="Linkedin" />
                              </div>
                            </div>
                          </div> : <div></div> }
                          </CSSTransition>
                        </div>
                      </div>
                    
      }
    }
  } else {
    setTimeout(() => {
      setInProp(false)
    }, 0);
  }

  return (
   divDetail
  )

}

export default ImageDetail
