import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ManageBooks from "../../pages/ManageBooks/ManageBooks";
import { setPopupComponent, showPopup } from "../../redux/actions/popUp.action";

function usePopRoutes(){
  const location = useLocation()
  const reduxDispatch = useDispatch()
  const history = useNavigate();

  useEffect(() => {
    if (/\/add-book\/?/g.test(location.pathname)){
     reduxDispatch(setPopupComponent(<ManageBooks onClose={() => {
      history('/')
      reduxDispatch(showPopup({ispopupOpen: false}))
    }} />))
      reduxDispatch(showPopup({ispopupOpen: true, onClose: () => history('/') }))
    }
    if (/\/edit-book\/?/g.test(location.pathname)){
      reduxDispatch(setPopupComponent(<ManageBooks onClose={
        () => {
          history('/')
      reduxDispatch(showPopup({ispopupOpen: false}))
    }
      } edit />))
      reduxDispatch(showPopup({ispopupOpen: true, onClose: () => history('/') }))
    } 
  }, [location.pathname]) // eslint-disable-line
}

export default usePopRoutes;