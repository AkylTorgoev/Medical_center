
import React, { createContext, useContext, useReducer, useState } from 'react';
import axios from 'axios';
import { ACTIONS, API } from '../helpers/const';
import { useLocation, useNavigate } from 'react-router-dom';


export const productContext = createContext();

export const useProducts = () => {
    return useContext(productContext)
}




const INIT_STATE = {
    products: [],
    productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS:
            return { ...state, products: action.payload };
            case ACTIONS.GET_PRODUCT_DETAILS:
                return { ...state, productDetails: action.payload };
                default:
                    return state;
                }
            }
            
            const ProductContextProvider = ({ children }) => {
                
                const location = useLocation()
                const navigate = useNavigate()

                const [page, setPage] = useState(1)
                const [state, dispatch] = useReducer(reducer, INIT_STATE)

                const [count, setCount] = useState(1)
                // console.log(page, count)
               
                const getProducts = async () => {
                    // let doc=location.pathname
                    // let url=`${doc}?page=${page}`
                    // navigate(url)
                    // console.log(page);
                    const { data } = await axios(`${API}/?page=${page}`)
                    setCount(Math.ceil(data.count / 3))
                    dispatch({
                        type: ACTIONS.GET_PRODUCTS,
                        payload: data
                    }
                    )
                    console.log(data)
                };





        const getProductDetails = async (id) => {
            const { data } = await axios(`${API}/${id}/`);
            dispatch({
                type: ACTIONS.GET_PRODUCT_DETAILS,
                payload: data
            });

        };



        const addProduct = async (newProduct) => {
            const config ={
                headers: {'Content-Type':'multipart/form-data'}
              }
          
              let newNewProduct = new FormData()
              newNewProduct.append('name', newProduct.name)
              newNewProduct.append('image', newProduct.image)
              newNewProduct.append('direction', newProduct.direction)
              newNewProduct.append('speciality', newProduct.speciality)
              newNewProduct.append('ranks', newProduct.ranks)
              newNewProduct.append('description', newProduct.description)

             let ta = newNewProduct.get('ranks')

            //  let image = new FormData()
            //  image.append('image', newProduct.image)
                 
             console.log(ta);

            await axios.post(`${API}/`, newNewProduct, config)
            getProducts()

        }

        const deleteProduct = async (id) => {
            await axios.delete(`${API}/${id}/`)
            getProducts()
          }
        
        
        
          const saveEditedProduct = async (newProduct) => {
            const config ={
                headers: {'Content-Type':'multipart/form-data'}
              }

            let newEditProduct = new FormData()
              newEditProduct.append('name', newProduct.name)
              newEditProduct.append('speciality', newProduct.speciality)
              newEditProduct.append('ranks', newProduct.ranks)
              newEditProduct.append('description', newProduct.description)
              newEditProduct.append('id', newProduct.id)
              let id = newEditProduct.get('id')
              console.log(id);
              
              
            await axios.patch(`${API}/${id}/`, newEditProduct, config);
            getProducts()
          };
        

          const fetchByParams = async(query, value)=>{
            if(value==='all'){
              getProducts()
            }else{
                
              const { data } = await axios(`${API}filter/?${query}=${value}`)
            
              dispatch({
                type: ACTIONS.GET_PRODUCTS,
                payload: data
              })
            }
              }
            
              const searchFilter = async(value)=>{
              
                const { data } = await axios(`${API}search/?q=${value}`)
              
                dispatch({
                  type: ACTIONS.GET_PRODUCTS,
                  payload: data
                })
                
            
              }

              function checkLike(id) {
                let like = JSON.parse(localStorage.getItem('like'));
                if (like) {
                  let newLike = like.products.filter((elem) => elem.item.id == id);
                  return newLike.length > 0 ? true : false;
                } else {
                  like = {
                    product: [],
                    totalPrice: 0,
                  };
                }
              }
          


        return <productContext.Provider 
        value={{
                products: state.products,
                productDetails: state.productDetails,
                addProduct,
                getProducts,
                getProductDetails,
                saveEditedProduct,
                deleteProduct,
                setPage,
                page,
                count,
                fetchByParams,
                searchFilter,
                checkLike


            }}

            >{children}</productContext.Provider>
        
    
}

export default ProductContextProvider;