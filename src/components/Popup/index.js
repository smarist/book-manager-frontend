import { connect } from 'react-redux'
import { showPopup } from '../../redux/actions/popUp.action'
import Popup from './Popup'



const mapStateToProps = ({popup}) => ({
    ispopupOpen: popup.ispopupOpen,
    popupComponent: popup.popupComponent,
    onClose: popup.onClose,
})

const mapDispatchToProps = (dispatch) => ({
    showPopup: (data) => dispatch(showPopup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Popup)