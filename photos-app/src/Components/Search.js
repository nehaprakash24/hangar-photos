import React, { Component } from 'react';

import axios from 'axios';
import { Link } from "@reach/router";
import ImageDetail from './ImageDetail';
import SearchInput from './SearchInput';
import Loader from 'react-loader-spinner';
import Footer from './Footer';

import '../assets/scss/Search.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Arrow from '../assets/svg/arrow.svg';


class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchResult: [],
      imageDetail: {},
      selectedImage: '',
      loading: true,
      error: null
    };

    this.getSearchItems = this.getSearchItems.bind(this);
    this.displayDetail = this.displayDetail.bind(this);
    this.setSearchVal = this.setSearchVal.bind(this);
  }

  getItemsList() {
    axios.get(`http://localhost:4001/items?q=${
      this.state.searchValue
    }`)
    .then(response => {
      this.setState({
        searchResult: response.data,
        loading: false,
        imageDetail: {},
        selectedImage: ''
      });
    })
    .catch(error => {
      this.setState({
        loading: false,
        error: error,
      });
    });
  }
  
  componentDidMount() {
    this.getItemsList();
  }

  getSearchItems(e) {
    e.preventDefault();
    this.setState({
      searchResult: {},
      loading: true,
      imageDetail: {},
      selectedImage: ''
    });
    setTimeout(() => {
      this.getItemsList();
    }, 500);
  }

  setSearchVal(val) {
    this.setState({
      searchValue: val
    })
  }

  displayDetail(detail,itemNum) {
    if(this.state.imageDetail.id && this.state.imageDetail.id === detail.id) {
      this.setState({
        imageDetail: {},
        selectedImage: ''
      });
    } else {
      this.setState({
        imageDetail: detail,
        selectedImage: itemNum
      });
    }
  }

  render() {
    const { searchValue, searchResult, imageDetail, selectedImage, loading} = this.state;

    let content = '';
    let loader = ''

    if ( loading ) {
      loader = <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={10000} //3 secs
              />;
    } else {
      loader = '';
      if (this.state.error) {
        content = <div className = "mx-0 mb-4 pl-1 letter-spacing">
                    <h5 className="border-bottom pb-4 mb-5"> {this.state.error.message} </h5>
                  </div>
      }

      if ( searchResult && searchResult.length ) {
        content = <React.Fragment>
                  <div className = "row mx-0 mt-4 pl-2 letter-spacing">
                    <h6><small  className = "font-weight-bold"> ALL RESULTS </small></h6>
                  </div>
          
                  <div className = "row mx-0 px-1">
                    {searchResult.map((result,index) => (
                      <React.Fragment key = {index}>
                        <div  
                          className = {"col-4 " + (index !== selectedImage && selectedImage !== '' ? 'inactive' : '')} 
                          id = "res-image" 
                          key = {result.id} 
                          onClick = {(e) => this.displayDetail(result, index)}
                        >
                          <img className = "img-fluid" src = {process.env.PUBLIC_URL + result.image} alt = {result.title} />
                        </div>
          
                        <ImageDetail 
                          img = {imageDetail} //detail of the item
                          selectedIndex = {selectedImage} // index of selected image
                          imgIndex = {index} // index of each image
                          len = {searchResult.length - 1} // length of the array
                          displayImgDetail = {this.displayDetail}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </React.Fragment>;
      } else if (searchValue && !searchResult.length) {
        content = <div className = "mx-0 mb-4 pl-2 letter-spacing">
                    <h5 className="border-bottom pb-4 mb-5"> No items found </h5>
                  </div>
      }
    }

    return (
      <div className = "row mx-0 mainSearch">
        <div className = "home-search">

          <div className = "row mx-0 justify-content-center py-4 px-5">
            <Link to = "/">
              <img src = {Arrow} alt="arrow" />
            </Link>  
          </div>

          <SearchInput 
            searchValue = {searchValue} 
            getSearchItems = {this.getSearchItems} 
            setSearchVal = {this.setSearchVal}
          />

          {content}
          {loader}

          <Footer />

        </div>
      </div>
    )
  }
}

export default Search
