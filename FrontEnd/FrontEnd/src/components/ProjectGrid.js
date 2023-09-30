import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import Project from './Project';
import InfiniteScroll from 'react-infinite-scroll-component';

const ProjectGrid = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [front, setfront] = useState(" ")
  const [back, setback ] = useState(" ")
  const [filterspplied, setfiltersapplied] = useState(false)
  const [IsSearchFiltered , setissearchfiltered] = useState(false)


  const capitalizeFirstLetter = (string) => {
    if (string!=='') {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }

  const updateprojects = async () => {
    props.setProgress(10);
    setLoading(true);
    const url = 'http://localhost:9845/project/all?size=10&no=0'
    console.log(url);
    setPage(1)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(parsedData.content);
    setTotalResults(articles.numberOfElements);
    setissearchfiltered(false)
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    if (props.category!=='') {
      document.title = `${capitalizeFirstLetter(props.category)} - NewsWave`;
    }
    else {
      document.title = 'NewsWave';
    }
    updateprojects();
    /* eslint-disable */
  }, []);

  const fetchMoreData = async () => {
    /*
    We first update the URL by increasing page by 1, then update page This is because setState is asynchronous, so when we call setState({ page: page + 1 }) and immediately try to access page in the URL, it may not have been updated yet. So, first we used URL and then update page state
    */
    const url = 'http://localhost:9845/project/all?size=10&no=' + page
    console.log("Fetch More Data is being called => " + url);
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    setArticles(articles.concat(parsedData.content));
    setTotalResults(articles.length)
  }

  const handleFront = (event) => {
    let newfront = event.target.value
    setfront(newfront)
    setfiltersapplied(true)
    console.log(front);
  }

  const handleBack = (event) => {
    let newback = event.target.value
    setback(newback)
    setfiltersapplied(true)
    console.log(newback)
  }

  useEffect(() => {
    if(IsSearchFiltered == true)
      { 
          let filtered_articles = []
          if( front.length!==0)
          {
            filtered_articles = articles.filter((project) =>
            project.frontEnd.some((tech) => tech.name.toLowerCase().includes(front)));
          }
          else filtered_articles = articles

          let filter_filter
          if( back.length !== 0)
          {
            filter_filter = filtered_articles.filter((project) =>
            project.backend.some((tech) => tech.name.toLowerCase().includes(back)));
          }

          setArticles(filter_filter)        
      }
      setissearchfiltered(false)
  } , [IsSearchFiltered])

  const getAllJobs = async() => {
        //setcountry( (country) => ({country : ""}) , () => { alert(country)})
        updateprojects()
  }

  useEffect ( () => {
    console.log("front/back Updated")
    if(front.length == 0 & back.length == 0) setfiltersapplied(false)
  }, [front,back])


  const applyFilters = async() => {
      if(filterspplied==false){
        alert("The Filter Feilds are empty Atleast one field is mandatory");
      }
      else setissearchfiltered(true)
  }
    
  return (
    <>
      <div  className='container my-5'>
        <form style = {{ marginTop : '100px'}}>
        <div className="row">
          <div className="col-2">
            <input type="text" className="form-control" onChange={handleFront} placeholder="FrontEnd"></input>
          </div>
          <div className="col-2">
            <input type="text" className="form-control" onChange={handleBack} placeholder="BackEnd"></input>
          </div>
          <div className="col-4">
          <button className="col-4 btn btn-success" type="button" onClick={getAllJobs} >All Proj</button>
          </div>
          <div className="col-4">
          <button className="col-4 btn btn-success" type="button" onClick={applyFilters}>Filter</button>
          </div>
        </div>
        </form>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}>
        <div className='container my-5'>
          <h3 className='text-center' style={{marginTop: '100px', marginBottom: '30px'}}>{props.brandName} - Top Projects </h3>
          {loading && <Spinner />}
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.id}>
                <Project ProjectTitle ={element.title?element.title:""} ProjectRemark={element.availablity} ProjectFrontend={element.frontEnd} ProjectBackend={element.backend} infra={element.infra} databases={element.databasemodel}/>
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

ProjectGrid.defaultProps = {
  country: 'in',
  pageSize: 15,
  category: ''
}

ProjectGrid.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default ProjectGrid;