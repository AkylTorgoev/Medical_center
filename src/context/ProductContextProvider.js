
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
                };





        const getProductDetails = async (id) => {
            const { data } = await axios(`${API}/${id}/`);
            dispatch({
                type: ACTIONS.GET_PRODUCT_DETAILS,
                payload: data
            });

        };



        const addProduct = async (newProduct) => {
            let token = JSON.parse(localStorage.getItem('token'));


            const Authorization = `Bearer ${token.access}`;

            // const config ={
            //     headers: {'Content-Type':'multipart/form-data'}
            //   }
          
              let newNewProduct = new FormData()
              newNewProduct.append('name', newProduct.name)
              newNewProduct.append('image', newProduct.image)
              newNewProduct.append('direction', newProduct.direction)
              newNewProduct.append('speciality', newProduct.speciality)
              newNewProduct.append('ranks', newProduct.ranks)
              newNewProduct.append('description', newProduct.description)

                
            await axios.post(`${API}/`, newNewProduct, {
                headers: { Authorization },
              })
            getProducts()

        }

        const deleteProduct = async (id) => {
          let token = JSON.parse(localStorage.getItem('token'));
          const Authorization = `Bearer ${token.access}`;
            await axios.delete(`${API}/${id}/`, {headers: { Authorization },})
            getProducts()
          }
        
        
        
          const saveEditedProduct = async (newProduct) => {
            let token = JSON.parse(localStorage.getItem('token'));


            const Authorization = `Bearer ${token.access}`;


            // const config ={
            //     headers: {'Content-Type':'multipart/form-data'}
            //   }

            let newEditProduct = new FormData()
              newEditProduct.append('name', newProduct.name)
              newEditProduct.append('speciality', newProduct.speciality)
              newEditProduct.append('ranks', newProduct.ranks)
              newEditProduct.append('description', newProduct.description)
              newEditProduct.append('id', newProduct.id)
              if(typeof(newProduct.image) !== 'string'){
              newEditProduct.append('image', newProduct.image)
              }
              let id = newEditProduct.get('id')
              
              
            await axios.patch(`${API}/${id}/`, newEditProduct, {
                headers: { Authorization },
              });
            getProducts()
          };
        

          const fetchByParams = async(value)=>{
            if(value==='all'){
              getProducts()
            }else{
                
              const { data } = await axios(`${API}?speciality=${value}`)
            
              dispatch({
                type: ACTIONS.GET_PRODUCTS,
                payload: data
              })
            }
              }
            
              const searchFilter = async(value)=>{
              
                  const { data } = await axios(`${API}/search/?q=${value}`)
                  
                  dispatch({
                      type: ACTIONS.GET_PRODUCTS,
                      payload: data
                    })
                    console.log(data);
                
            
              }
            
                       

              const like = async (id) => {
                let token = JSON.parse(localStorage.getItem('token'));
                const Authorization = `Bearer ${token.access}`;
                  await axios(`${API}/${id}/toggle_like`, {headers: { Authorization },})
                  getProducts()
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
                like,
                


            }}

            >{children}</productContext.Provider>
        
    
}

export default ProductContextProvider;