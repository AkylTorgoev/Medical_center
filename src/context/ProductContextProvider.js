
import React, { createContext, useContext, useReducer } from 'react';
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


                const [state, dispatch] = useReducer(reducer, INIT_STATE)
                
                const getDoctors = async () => { const { data } = await axios(`${API}/`);
                return data.result
            }
                const getProducts = async () => {
                    const { data } = await axios(`${API}/`)
                    dispatch({
                        type: ACTIONS.GET_PRODUCTS,
                        payload: data.results
                    }
                    )
                    console.log(data.results)
                };





        const getProductDetails = async (id) => {
            const { data } = await axios(`${API}/${id}/`);
            dispatch({
                type: ACTIONS.GET_PRODUCT_DETAILS,
                payload: data.results
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
                 
             console.log(ta);

            await axios.post(`${API}/`, newNewProduct, config)
            getProducts()

        }

        const deleteProduct = async (id) => {
            await axios.delete(`${API}/${id}`)
            getProducts()
          }
        
        
        
          const saveEditedProduct = async (newProduct) => {
            const config ={
                headers: {'Content-Type':'multipart/form-data'}
              }

            let newNewProduct = new FormData()
              newNewProduct.append('name', newProduct.name)
              newNewProduct.append('direction', newProduct.direction)
              newNewProduct.append('speciality', newProduct.speciality)
              newNewProduct.append('ranks', newProduct.ranks)
              newNewProduct.append('description', newProduct.description)

            await axios.patch(`${API}/${newProduct.id}/`, newNewProduct, config);
            getProducts()
        
          }


        return <productContext.Provider 
        value={{
                products: state.products,
                addProduct,
                getProducts,
                getProductDetails,
                saveEditedProduct,
                deleteProduct,
                getDoctors,



            }}

            >{children}</productContext.Provider>
        
    
}

export default ProductContextProvider;