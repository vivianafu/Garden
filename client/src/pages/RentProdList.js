import React, { useState, useEffect } from 'react'
import ProdHeaderL from '../components/ProdHeader/ProdHeaderL'
import { withRouter,useParams,NavLink ,useLocation} from 'react-router-dom'
import ProdSideNav from '../components/ProdSideNav/ProdSideNav'
import ProdBreadcrumbsShort from '../components/ProdBreadcrumbs/ProdBreadcrumbsShort'
import ProdCardMd from '../components/ProdCardMd/ProdCardMd'
import Pagination from '../components/VPaginatoin/VPagination'
import './RentProdList.scss'
import axios from 'axios'

//selection
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme } from '@material-ui/core/styles';


function RentProdList(props) {

  const[prod,setProd] =useState([])   
  const[occasion,setOccasion] = useState("")
  const[category,setCategory] = useState("")
  const[loading,isLoading]=useState(false)
  const[allProd,setAllProd]=useState(true)
  const [gKeyword,gSetKeyword]=useState("")
  const[title,setTitle]= useState("")

  console.log(props.occasion);
  console.log(occasion)

  //selection
  const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));
  const classes = useStyles();
  const [order, setOrder] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [card, setCard] = React.useState('9');
  const [open2, setOpen2] = React.useState(false);


  const handleChange = (event) => {
    setOrder(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange2 = (event) => {
    setCard(event.target.value);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };

  useEffect(()=>{
    console.log(order)
  },[order])



// 一開始抓資料
  // useEffect(() =>{
  //   getAllData()
  //   // axios.get('http://localhost:3001/products')
  //   // .then((response)=>{console.log(response)
  //   // setProd(response.data)})
  //   // .catch((err)=> console.log(err))
  // },[])

  
    // 分頁
    const[currentPage,setCurrentPage]=useState(1)
    //改變分頁
    const[postsPerPage,setPostPerPage]=useState(card)
    useEffect(()=>{
      setPostPerPage(card)
    },[card])
    //拿到該頁卡片筆數
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const CurrentPosts = prod.slice(indexOfFirstPost, indexOfLastPost)

    const paginate= (pageNumber)=>setCurrentPage(pageNumber)

  // console.log(postsPerPage)

  //全部商品
  useEffect(() =>{
    getAllData()
  },[allProd])

  //場景
  useEffect(() =>{
    if(occasion)
    getOccasionData()
    setTitle(occasion)
  },[occasion] )

  //尺寸
  useEffect(() =>{
    if(category)
    getCategoryData()
    setTitle(category)
  },[category])

  //搜尋
  useEffect(() =>{
  if(gKeyword){
    searchAllData()
    setTitle(`搜尋：`+gKeyword)
    console.log(gKeyword )
  }
  },[gKeyword])


  async function getAllData() {
    //開始載入資料，先出現spinner
    isLoading(true)
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await axios('http://localhost:3001/products')
      // ok只能判斷201-299狀態碼的情況
      if (response.data) {
        // 剖析資料為JS的數值
        setProd(response.data)
        // 設定資料到全部商品狀態
      }
      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        isLoading(false)
      }, 1000)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  async function getSortData() {
    //開始載入資料，先出現spinner
    isLoading(true)
    // 要使用try-catch來作錯誤處理
    try {
      // 從伺服器得到資料
      const response = await axios('http://localhost:3001/products')
      // ok只能判斷201-299狀態碼的情況
      if (response.data) {
        // 剖析資料為JS的數值
        setProd(response.data)
        // 設定資料到全部商品狀態
      }
      // 最後關起spinner，改呈現真正資料
      setTimeout(() => {
        isLoading(false)
      }, 1000)
    } catch (error) {
      // 發生錯誤的處理情況
      alert('無法得到伺服器資料，請稍後再重試')
      console.log(error)
    }
  }

  async function getOccasionData() {
    isLoading(true)
    try {
      const response = await axios.get(`http://localhost:3001/products/geto/${occasion}`)
      if (response.data) {
        setProd(response.data)
      }
      setTimeout(() => {
        isLoading(false)
      }, 800)
    } catch (error) {
      alert('無法得到伺服器資料，請稍後再重試2')
      console.log(error)
    }
  }

  async function getCategoryData() {
    isLoading(true)
    try {
      const response = await axios.get(`http://localhost:3001/products/getc/${category}`)
      if (response.data) {
        setProd(response.data)
      }
      setTimeout(() => {
        isLoading(false)
      }, 300)
    } catch (error) {
      alert('無法得到伺服器資料，請稍後再重試3')
      console.log(error)
    }
  }

  async function searchAllData() {
    isLoading(true)
    try {
      const response = await axios.get(`http://localhost:3001/products/search/${gKeyword}`)
      if (response.data) {
        setProd(response.data)
      }
      setTimeout(() => {
        isLoading(false)
      }, 1000)
    } catch (error) {
      alert('無法得到伺服器資料，請稍後再重試3')
      console.log(error)
    }
  }

  const display= (
    <>
          {CurrentPosts.map((prods)=>(
            <ProdCardMd
            key ={prods._id}
            prod = {prods}
            >
            </ProdCardMd>
          ))}
    </>
  )
  const display2=(
    <>
          <div className="v-page d-flex justify-content-center mt-5">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={prod.length}
              paginate={paginate}
              className=""
             />
          </div>
    </>
  )
  const spinner =(
    <>
        <div className="d-flex v-spinner">
                  <img style={{width:'300px'}} alt="" src='http://localhost:3000/images/svg/spinner.gif' />
                   {/* <h4 className="mr-2">Loading... </h4> */}
                   {/* <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div> */}
          </div>
    </>
  )


  return (
    <>
      <ProdHeaderL />
      <ProdBreadcrumbsShort />

      <div className="v-prod-list-wrapper">
        <div className="m-0 p-0 row justify-content-between ">
          <div className="v-prod-sidenav p-0 col-2 m-0 ">
            <ProdSideNav 
              setAllProd = {setAllProd}
              setOccasion = {setOccasion}
              setCategory = {setCategory}
              keyword ={gSetKeyword}
              occasion ={ occasion }
              category ={ category }
              allProd ={ allProd }
              setTitle ={ setTitle }
              pageOccasion = { props.occasion }
            />
          </div>
          
          <div style={{ flexDirection:"column"}} className="p-0 col-9 d-flex">
            <div className="v-price-bar d-flex justify-content-between">

                <div>
                  <h3 className="v-list-title m-0">{ title }</h3>
                </div>
                <div>
                {/* <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select> */}
                <FormControl className={classes.formControl}>
                    <InputLabel style={{color:'#6C8650'}} id="demo-controlled-open-select-label2">排序方式</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select2"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={order}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>價格由低至高</MenuItem>
                      <MenuItem value={2}>價格由高至低</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{color:'#6C8650'}} id="demo-controlled-open-select-label2">每頁顯示筆數</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select2"
                      open={open2}
                      onClose={handleClose2}
                      onOpen={handleOpen2}
                      value={card}
                      onChange={handleChange2}
                    >
                      <MenuItem value={9}>顯示9筆</MenuItem>
                      <MenuItem value={15}>顯示15筆</MenuItem>
                      <MenuItem value={30}>顯示30筆</MenuItem>
                    </Select>
                  </FormControl>
                </div>
            </div>

            <div className="row p-0 m-0">
                  { loading ? spinner : display}
                
            </div>
            { loading ? "" : display2}
          </div>

        </div>
      </div>
    </>
  )
}

export default withRouter(RentProdList)
